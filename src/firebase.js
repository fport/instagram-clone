import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBter_H7u4m0AMwNTWUawXNIth_tCQXyGE",
  authDomain: "instagram-clone-b14d1.firebaseapp.com",
  databaseURL: "https://instagram-clone-b14d1.firebaseio.com",
  projectId: "instagram-clone-b14d1",
  storageBucket: "instagram-clone-b14d1.appspot.com",
  messagingSenderId: "591872653128",
  appId: "1:591872653128:web:df48c7e3174551cc86657d",
  measurementId: "G-TD9K45LWBH",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
