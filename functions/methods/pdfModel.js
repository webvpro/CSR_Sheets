import { initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore } from 'firebase-admin/firestore';
import functions from 'firebase-functions';

initializeApp();

const db = getFirestore();
const bucket = getStorage().bucket();

export default getCSR =  functions.https.onRequest( async (req, res) => {
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