import fetch from 'node-fetch';
import { initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { load } from 'cheerio';
import cors from 'cors';
import functions from 'firebase-functions';

initializeApp();

const db = getFirestore();
const bucket = getStorage().bucket();



export const getCSR =  functions.https.onRequest( async (req, res) => {
  const getBookPage = (desc) => {
		const atAry = desc.split('@');
		const rbAry = atAry[1].split(']');
		const lbAry = rbAry[0].split('[')
		const rAray = lbAry[1].split('|')
		return rAray;
	}
//load data
  const file = await bucket.file('TTRPG/MCG/json/abilities.json').download({validation: false});

  let csrObj = JSON.parse(file[0]);
  const rdata = csrObj.ablilites.map(item => {
    let obj = {};
    let bp = getBookPage(item.data.description);
    let pnAry = bp[1].split('=')
    obj['name'] = item.name;
    obj['source'] = bp[0];
    obj['pageNum'] = pnAry[1];
    obj['pool'] = item.data.costPool;
    obj['cost'] = parseInt(item.data.costPoints);
    return obj;
  })
  rdata.forEach(item => {
    db.collection('ablilites').add({...item})
  });
    
  res.sendStatus(200);
      
});


const simpleView = '?view=simple'
  const mcgPages = [
    { catagory: 'types', url: 'http://cypherguide.com/types/', pgNums: 1},
    { catagory: 'descriptors', url: 'http://cypherguide.com/descriptors/', pgNums: 2 },
    { catagory: 'foci', url: 'http://cypherguide.com/foci/', pgNums: 2 },
    { catagory: 'cyphers', url: 'http://cypherguide.com/cyphers/', pgNums: 9 },
  ]
  
  const scrapeMetatags = () => {
    const requests = mcgPages.map(async pg => {
      const itemsMap = new Map();
      for (var index = 0; index < pg.pgNums; index++) {
        const pgNum = index > 0 ? `page/${index + 1}/` : '';
        const view = pg.catagory == 'cyphers' ? '' : simpleView;
        const url = `${pg.url}${pgNum}${view}`;
        const res = await fetch(url);
        const html = await res.text();
        const $ = await load(html);
        $('#content article').each((i, item) => {
          // inline  function
          const pgUrl =  $('.post_title h3 a', item).length > 0 ? 
            $('.post_title h3 a', item).attr('href') : url;
          
          const name = $('div.post_title h3 a', item).length > 0 ?
          $('div.post_title h3 a', item).text().trim() : $('div.post_title h3', item).text().trim()
          const itemCode = name.toUpperCase().replace(/\s/g, ''); 
          const srcPgMap = new Map();
          $('div.post_content ul li', item).map((i, txt) => {
            let strAry = $(txt).text().split(',');
            let srcCode = strAry[0].match(/\b(\w)/g).join('').toUpperCase();
            srcPgMap.set(srcCode, {title: strAry[0], pg: strAry[1].trim()});
          })
          
          itemsMap.set(itemCode, {srcUrl: pgUrl, name: name, books: {...[...srcPgMap]}});
          
        })   
      }; 
      const pgMap = new Map();
      return pgMap.set(pg.catagory, itemsMap); 
    });

    return Promise.all(requests);
  };
  
export const scraper = functions.https.onRequest( async (request, response) => {

  cors({ origin: true})(request, response, async () => {
        const data = await scrapeMetatags();
        
        for (const [idx, value] of Object.entries(data)) {
          value.forEach((obj, col) => {
            console.log(col);
            obj.forEach(async (item, code) => {
              console.log(item)
              await db.collection(col).add({...item})
            })
          });
        }
        
           
          //
       
          
        
        response.sendStatus(200)
  });
});