import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD2ZpGw5QXuD-lHqw5BupKAerydX3ZcLEU",
    authDomain: "signal-clone-9c1e0.firebaseapp.com",
    projectId: "signal-clone-9c1e0",
    storageBucket: "signal-clone-9c1e0.appspot.com",
    messagingSenderId: "197863292534",
    appId: "1:197863292534:web:179efdc2be135e6bb6e957"
  };

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.apps();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };