import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import functions from 'firebase-functions';


const app = initializeApp(applicationDefault(),"createSource");
const db = getFirestore(app);

  export const createNewSource = functions.https.onCall( async (data, context) => {
    if (!typeof data === 'object') {
      throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
          'one arguments "data" containing the contents of a source form.');
    }
    if (!context.auth) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
          'while authenticated.');
    }
    const categories = [
      { collection: 'abilites', ref: 'ablilties' },
      { collection: 'types', ref: 'types' },
      { collection: 'descriptors', ref: 'descriptors' },
      { collection: 'foci', ref: 'foci' },
      { collection: 'cyphers', ref: 'cyphers' },
    ]
    let docRef = {};
    try {
      docRef = await db.collection('sources').add({
        owner: context.auth.uid,
        name: data.name,
        description: data.description,
        books:[]
      })
      if (docRef) {
        
        
        categories.map(async category => {
          const batchAry = [];
          batchAry.push(db.batch());
          let writeCnt = 0;
          let batchIdx = 0;
          let catDocs = await db.collection(category.collection).get()
          
          catDocs.forEach(doc => {
            let newSubRef = docRef.collection(category.ref).doc(doc.id);
            batchAry[batchIdx].set(newSubRef, doc.data());
            writeCnt++
            if(writeCnt === 400){
              batchAry.push(db.batch());  
              batchIdx++
              writeCnt = 0
            }
          });
      
          batchAry.forEach( async batch => await batch.commit());
        })
        
      }
      
    } catch (e) {
      throw new functions.https.HttpsError(e.message)
    }
     
    return {...docRef}
    
  });