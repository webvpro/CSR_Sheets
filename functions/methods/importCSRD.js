import functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore } from 'firebase-admin/firestore';


initializeApp();

const subCollections = {
    "ABILITIES" : { filename: 'abilities.json', collection: 'abilities'},
    "CYPHERS" : { filename: 'cyphers.json', collection: 'cyphers' },
    "POWERSHIFTS": {name: 'power-shifts.json', collection: 'powerShifts' }
  }

// fvtt formatting 
const abilitiesFormat = (items) => {
    const formattedList = items.map( item => {
        const pubObject = descriptionSourceObj(item.data.description);
        const poolKey = item.data.costPool == "Pool" ? "" : item.data.costPool.toUpperCase();
        const pgDescription = item.data.description;
        return {
            name: item.name,
            description: pgDescription,
            costPool: poolKey,
            poolPoints: item.data.costPoints,
            pubKey: pubObject.PUB_KEY,
            pubTitle: pubObject.label,
            pubPg: pubObject.pgNum,
            tier: item.data.tier.toUpperCase(),
            category: item.categaory?? "",
            action: poolKey == "" ? false : true,   
        };
   });
   return formattedList
}; 

export const sourceImports = functions.https.onRequest( async (request, response) => {
    const mcgPubs = {
        CYPHERSYSTEMREFERENCEDOCUMENT: { 
            code:"CSRD",
            title: "Cypher System Reference Document",
            collections:["abilities"],
        },
    };
    const db = getFirestore();
    const bucket = getStorage().bucket();
    const fd = bucket.file("TTRPG/MCG/publications/CSRD/abilities.json")
    const obj = await fd.download();
    const items = JSON.parse(obj)
    let formattedList
    let grouped
    //root collections for all books
    const pubsRef = db.collection('publications');
    let pubList;
    let pubDoc;
    let pubRef;
    
    //pubilcations collection needs to be on root
    //each pubilcation doc will have sub collections for its items such as abilities
    
    /*if (items.publications) {
        pubList =  items.publications
        for (const [key, pub] of Object.entries(pubList)) {
         pubDoc = await pubsRef.doc(key).get();
         if (!pubDoc.exists) {
             pubRef = await pubsRef.doc(key).set({...pub});
         } else {
             pubRef = await pubDoc.update({...pub})
         }
         console.log(pubRef)          
        };
     }*/

    if (items.abilities) {
        pubDoc = await pubsRef.doc('CYPHERSYSTEMREFERENCEDOCUMENT').get();
        formattedList = abilitiesFormat(items.abilities);
        // need them grouped by publication
        /*grouped  = formattedList.reduce((r, a) => {
            r[a.pubKey] = [...r[a.pubKey] || [], a];
            return r;
           }, {});
        for (const [key, items] of Object.entries(grouped)) {
            console.log(`setting up in ${key}`)
            const subRef = pubsRef.doc(key).collection("abilities")
            let subDoc;
            for (const [idx, item] of Object.entries(items)) {
                console.log("item:", idx,item)
                subDoc = await subRef.add({...item})
            }
        }*/

    }
    
    //const pubList = [...new Set(formattedList.map(item => item.pubKey))]; // [ 'A', 'B'] 
    //response.status(200).send(grouped);
    
    response.status(200).send(formattedList);
    return 
});