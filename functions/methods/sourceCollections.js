import { initializeApp,applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import functions from 'firebase-functions';

const app = initializeApp(applicationDefault(), 'getSubCollectionsList');
const db = getFirestore(app);

export const sourceCollections = functions.https.onCall( async (data, context) => {
    if (!typeof data === 'object') {
      throw new functions.https.HttpsError('invalid-argument', 'The function must be called with ' +
          'one arguments "data" containing the contents of a source form.');
    }
    if (!context.auth) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
          'while authenticated.');
    }

    const docPath = data.docPath;

    const collectionsObjs = await db.doc(docPath).listCollections();
    const collections = collectionsObjs.map(col => col.id);

    return { ...collections };

});
