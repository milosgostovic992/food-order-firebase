import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBr_u2BemYKCIt3drqKnTgCilvS90vxEOE",
  authDomain: "food-order-app-5afa4.firebaseapp.com",
  databaseURL: "https://food-order-app-5afa4-default-rtdb.firebaseio.com",
  projectId: "food-order-app-5afa4",
  storageBucket: "food-order-app-5afa4.appspot.com",
  messagingSenderId: "625942828310",
  appId: "1:625942828310:web:6d9b4d1c28dabbd37f6c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)