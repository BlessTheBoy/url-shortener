import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgkdxNqCfkmQloh91xSHBqZuUBXjd25Uc",
  authDomain: "tinder-clone-703d9.firebaseapp.com",
  databaseURL: "https://tinder-clone-703d9.firebaseio.com",
  projectId: "tinder-clone-703d9",
  storageBucket: "tinder-clone-703d9.appspot.com",
  messagingSenderId: "804432160294",
  appId: "1:804432160294:web:141f8a26f5d78e674ba8e7",
  measurementId: "G-QFTZ1G8D0J",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
