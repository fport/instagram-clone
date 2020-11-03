import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAyxc-erGeYz700qvMwXmRvZ3Usqo-_9ns",
    authDomain: "insta-6d3b2.firebaseapp.com",
    databaseURL: "https://insta-6d3b2.firebaseio.com",
    projectId: "insta-6d3b2",
    storageBucket: "insta-6d3b2.appspot.com",
    messagingSenderId: "296241462292",
    appId: "1:296241462292:web:4a21f5b2b2ddea1c2dfb01",
    measurementId: "G-B7NJGQ1KSS"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
