import firebase from 'firebase'
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9aLTz_DbhmuJz1dS9A1BllaAkFQoDlQ4",
  authDomain: "the-project-41a48.firebaseapp.com",
  projectId: "the-project-41a48",
  storageBucket: "the-project-41a48.appspot.com",
  messagingSenderId: "407943473040",
  appId: "1:407943473040:web:9c988c76454c5a1fbe3515",
  databaseURL: "https://console.firebase.google.com/u/0/project/the-project-41a48/firestore/data/~2Faccount~2Fperson%23001"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firebase();