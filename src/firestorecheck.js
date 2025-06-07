// src/FirestoreCheck.js
import React, { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const FirestoreCheck = () => {
  useEffect(() => {
    const checkFirestoreConnection = async () => {
      try {
        const snapshot = await getDocs(collection(db, "review")); 
        // console.log("✅ Connected to Firestore. Docs found:", snapshot.size);
      } catch (error) {
        console.error("❌ Firestore connection failed:", error.message);
      }
    };

    checkFirestoreConnection();
  }, []);

  return <p>Check the console for Firestore connection status.</p>;
};

export default FirestoreCheck;