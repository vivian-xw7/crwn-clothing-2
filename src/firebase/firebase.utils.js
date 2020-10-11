import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-oKBfq8cQcBjfd_4IO4iQRZDp_T2Nt9M",
    authDomain: "crwn-clothing-db-e56cf.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-e56cf.firebaseio.com",
    projectId: "crwn-clothing-db-e56cf",
    storageBucket: "crwn-clothing-db-e56cf.appspot.com",
    messagingSenderId: "33343628816",
    appId: "1:33343628816:web:1e919024cc6e7e2fb78c95",
    measurementId: "G-P2L0STFC0C"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

  // firebase.auth().signInWithPopup(provider).then(function() {}).catch(function() {});

  export default firebase;