import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import FirestoreCheck from './firestorecheck';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
   const [user, setUser] = useState(null);
   
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log("🔥 Logged in user:", user);
      setUser(user); // Or store in context/state
    } else {
      console.log("🚫 User not logged in");
      setUser(null);
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <FirestoreCheck/>
    </Router>
  );
}

export default App;
