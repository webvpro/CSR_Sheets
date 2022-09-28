import functions from 'firebase-functions';
import { initializeApp,applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


const app = initializeApp(applicationDefault(), 'updateSources');
const db = getFirestore(app);


export const updateSources = functions.https.onRequest( async (request, response) => {
    const sourcesRef = db.collection("sources");
    const sourceSnap = await sourcesRef.get();
    const csrdAbililties = await  db.collection('publications').doc('CYPHERSYSTEMREFERENCEDOCUMENT').collection('abilities').get()
    sourceSnap.forEach(async doc => {
        console.log(doc.id, '=>', doc.data.name);
        const batchAry = [];
          batchAry.push(db.batch());
          let writeCnt = 0;
          let batchIdx = 0;
        csrdAbililties.forEach(async abilDoc => {
            let subColRef = sourcesRef.doc(doc.id).collection("abilities").doc(abilDoc.id)
            batchAry[batchIdx].set(subColRef, abilDoc.data())
            writeCnt++
            if(writeCnt === 400){
              batchAry.push(db.batch());  
              batchIdx++;
              writeCnt = 0;
            }
        });
        batchAry.forEach( async batch => await batch.commit());
      });   
    
    response.status(200).send("Done");
    return 
});