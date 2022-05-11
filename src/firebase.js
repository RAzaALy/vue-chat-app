import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    // your config here
    apiKey: "AIzaSyC9xjFUjnFnSCPkg_GAivkvYnGQDrTEt6U",
    authDomain: "vuechat-10f4b.firebaseapp.com",
    projectId: "vuechat-10f4b",
    storageBucket: "vuechat-10f4b.appspot.com",
    messagingSenderId: "828565455302",
    appId: "1:828565455302:web:ab0792b19ee72edee432c7",
    measurementId: "G-XPSHLBEYMT"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
