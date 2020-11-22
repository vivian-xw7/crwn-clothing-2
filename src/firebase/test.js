import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore;

// firebase database info
firestore.collection('users').doc('4742QEAd7iypWkf5V2QD').collection('cartItems').doc('hjTn4E7gMnRWfvL7BXJx');
firestore.doc('/users/4742QEAd7iypWkf5V2QD/cartItems/hjTn4E7gMnRWfvL7BXJx');
firestore.collection('/users/4742QEAd7iypWkf5V2QD/cartItems');