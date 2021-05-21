import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Add your Firebase credentials
firebase.initializeApp({
  apiKey: 'AIzaSyCjTrDI7DYucHsLIHrcLhnqIOxSuh5o7NQ',
  authDomain: 'mlt-tag-test.firebaseapp.com',
  databaseURL: 'https://mlt-tag-test-default-rtdb.firebaseio.com',
  projectId: 'mlt-tag-test',
  storageBucket: 'mlt-tag-test.appspot.com',
  messagingSenderId: '852050339091',
  appId: '1:852050339091:web:86038e2daf6b4a5ea966e6',
  measurementId: 'G-JGSHJWHFVL',
});

export default firebase;
