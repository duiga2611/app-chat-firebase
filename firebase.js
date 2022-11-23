import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDVbwL8rK9gWu6nwJEefFRIojXwv8OnLKA',
  authDomain: 'apchatdz.firebaseapp.com',
  projectId: 'apchatdz',
  storageBucket: 'apchatdz.appspot.com',
  messagingSenderId: '621634153118',
  appId: '1:621634153118:web:a8cdb2b2071435739ba98f',
  
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };