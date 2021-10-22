import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEwatJDS_R8GNB2N4hOMs4ushjEJw1FpY',
  authDomain: 'chat-group-886f8.firebaseapp.com',
  projectId: 'chat-group-886f8',
  storageBucket: 'chat-group-886f8.appspot.com',
  messagingSenderId: '649530564932',
  appId: '1:649530564932:web:060176989da959e3117711',
  measurementId: 'G-WKZ2KYQY8T',
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
