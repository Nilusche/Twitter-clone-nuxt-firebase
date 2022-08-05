import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFTk1qWQr3g-K20jdmweS60Ds5UBUas8I",
  authDomain: "twitterclone-77c2b.firebaseapp.com",
  projectId: "twitterclone-77c2b",
  storageBucket: "twitterclone-77c2b.appspot.com",
  messagingSenderId: "455321726102",
  appId: "1:455321726102:web:4096e2d45b13018373e6b7",
  measurementId: "G-5HFJT6JCKR"
};

firebase.initializeApp(firebaseConfig);

//init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectStorage = firebase.storage();
export {
    projectFirestore,
    timestamp,
    projectAuth,
    projectStorage
}