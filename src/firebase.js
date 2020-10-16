import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDf0PMMB_2rpXqhmFdPcs-oFwfuMYG_hQE",
  authDomain: "my-eshoop.firebaseapp.com",
  databaseURL: "https://my-eshoop.firebaseio.com",
  projectId: "my-eshoop",
  storageBucket: "my-eshoop.appspot.com",
  messagingSenderId: "1074777971537",
  appId: "1:1074777971537:web:b01cde087ac95e0b50d170",
  measurementId: "G-T7M7X21EZ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
