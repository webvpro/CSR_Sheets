import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import functions from 'firebase-functions';

const app = initializeApp(applicationDefault(),"createAdmin");
const db = getFirestore(app);


export const assignAdminClaim = functions.https.onRequest( async (request, response) => {
    const setUserId = 'W3uJQB3GtRdd4FYxgTv9ryYY10A3';
    const setAdmin = await getAuth().setCustomUserClaims(setUserId, { admin: true })
    console.log(setAdmin)
    const user = await getAuth().getUser(setUserId)
    response.status(200).send(user);
    return 
})