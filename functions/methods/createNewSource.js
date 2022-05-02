import { initializeApp } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import functions from 'firebase-functions';

const app = initializeApp();
const db = getFirestore(app);
 

  const catagories = [
    { catagory: 'types', ref: 'types' },
    { catagory: 'descriptors', ref: 'descriptors' },
    { catagory: 'foci', ref: 'cypherguide.com' },
    { catagory: 'cyphers', ref: 'cyphers' },
  ]
  
  
  
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
    let docRef = {id:'none'};
    try {
      docRef = await db.collection('sources').add({
        owner: context.auth.uid,
        name: data.name,
        description: data.description,
      })
    } catch (e) {
      throw new functions.https.HttpsError(e.message)
    }
     
    return {docId: docRef.id}
    
  });