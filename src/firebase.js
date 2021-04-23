import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMf7k80_DkjGXA5SipJgkCerK7kv0uVUU",
    authDomain: "todo-5f2d3.firebaseapp.com",
    databaseURL: "https://todo-5f2d3.firebaseio.com",
    projectId: "todo-5f2d3",
    storageBucket: "todo-5f2d3.appspot.com",
    messagingSenderId: "414016853579",
    appId: "1:414016853579:web:318a95cb0f90d43239dfce",
    measurementId: "G-N44BB3YVXL"
  });

  const db = firebaseApp.firestore();

  export default db;
