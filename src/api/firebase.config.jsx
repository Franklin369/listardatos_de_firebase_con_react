
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app"
var firebaseConfig = {
  apiKey: "AIzaSyDu5UEOV-iCSxvmv4qYOz2KH58edPPWsM0",
  authDomain: "hotel-1df33.firebaseapp.com",
  databaseURL: "https://hotel-1df33-default-rtdb.firebaseio.com",
  projectId: "hotel-1df33",
  storageBucket: "hotel-1df33.appspot.com",
  messagingSenderId: "554450676079",
  appId: "1:554450676079:web:ddde3bffa34a72c8de609a",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
