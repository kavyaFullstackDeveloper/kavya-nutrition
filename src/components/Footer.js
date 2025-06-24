// src/components/Footer.js

import React from 'react';
import {
  FaInstagram, FaLinkedin, FaYoutube, FaTwitter,
  FaFacebook, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="social-footer">
      <h3>Connect with Me 🌐</h3>
      <div className="social-icons">
        <a href="https://www.instagram.com/healthy_with_kavya" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
        <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} /></a>
        <a href="https://www.facebook.com/NutritionWithKavya/" target="_blank" rel="noopener noreferrer"><FaFacebook size={28} /></a>
        <a href="https://www.linkedin.com/in/kavyasnutrition/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
        <a href="https://wa.me/9553591993" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={28} /></a>
        <a href="mailto:kavya.why@gmail.com"><FaEnvelope size={28} /></a>
        <a href="https://x.com/kavya_why" target="_blank" rel="noopener noreferrer"><FaTwitter size={28} /></a>
      </div>
    </footer>
  );
};

export default Footer;
