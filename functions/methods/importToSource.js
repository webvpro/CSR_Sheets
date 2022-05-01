import functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import { runTransaction } from 'firebase/firestore';
initializeApp();


const db = getFirestore();


  const catagories = [
    { catagory: 'types', ref: 'types' },
    { catagory: 'descriptors', ref: 'descriptors' },
    { catagory: 'foci', ref: 'cypherguide.com' },
    { catagory: 'cyphers', ref: 'cyphers' },
  ]
  
  
  
export const importToSource = functions.https.onCall((data, context) => {
    const {name} = data;
    console.log(name);
  return {source : {...data}}
  
});