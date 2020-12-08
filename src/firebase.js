import firebase from "firebase";
import firebaseui from "firebaseui";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBnwXHdkASWvJJYuutRJCqwXAXq5kbD_Qo",
  authDomain: "link-shortener-38d8d.firebaseapp.com",
  projectId: "link-shortener-38d8d",
  storageBucket: "link-shortener-38d8d.appspot.com",
  messagingSenderId: "1088402699016",
  appId: "1:1088402699016:web:0a4d267a5d2af2c56bf2bd",
  measurementId: "G-X419PJTBTY",
});

var uiConfig = {
  signInSuccessUrl: "/",
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  //   tosUrl: "<your-tos-url>",
  // Privacy policy url/callback.
  //   privacyPolicyUrl: function () {
  //     window.location.assign("<your-privacy-policy-url>");
  //   },
};

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Initialize the FirebaseUI Widget using Firebase.
// The start method will wait until the DOM is loaded.

export { db, auth, uiConfig };
