// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAhzuKnn4WignF4HeRvOjxB9gw1UgO-wu0",
//   authDomain: "kavya-s-nutrition.firebaseapp.com",
//   projectId: "kavya-s-nutrition",
//   storageBucket: "kavya-s-nutrition.appspot.com",
//   messagingSenderId: "826173895820",
//   appId: "1:826173895820:web:3f364d9df1efaf4b5f37a9",
//   measurementId: "G-ZYBKMHVFXL"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);  // Now includes auth
// const db = getFirestore(app);
// const storage = getStorage(app);

// console.log("✅ Firebase connected:", app.name); // should log [DEFAULT]

// export { auth, db, storage };  // Export auth as well
// export const googleProvider = new GoogleAuthProvider();

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyAhzuKnn4WignF4HeRvOjxB9gw1UgO-wu0",
  authDomain: "kavya-s-nutrition.firebaseapp.com",
  projectId: "kavya-s-nutrition",
  storageBucket: "kavya-s-nutrition.appspot.com",
  messagingSenderId: "826173895820",
  appId: "1:826173895820:web:3f364d9df1efaf4b5f37a9"
};

const app = initializeApp(firebaseConfig);

console.log("✅ Firebase connected:", app.name);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, provider, storage };
