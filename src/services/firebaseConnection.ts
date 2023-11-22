import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLNH5UqXeKtNhx7bDAuXYCFru5fi5d2kw",
  authDomain: "reactlinks-f95f0.firebaseapp.com",
  projectId: "reactlinks-f95f0",
  storageBucket: "reactlinks-f95f0.appspot.com",
  messagingSenderId: "157048958458",
  appId: "1:157048958458:web:895a5e8c1c90ab191a8843"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}