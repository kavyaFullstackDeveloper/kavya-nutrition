// src/components/Footer.js

import './Footer.css';
import React from 'react';

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

    <footer className="social-footer">

      {/* Decorative Top Line */}

      <div className="footer-top-line"></div>


      <div className="footer-container">


        {/* ================= BRAND SECTION ================= */}

        <div className="footer-brand">

          <p className="footer-eyebrow">
            KAVYA'S NUTRITION
          </p>

          <h2>
            Nourish Your Body.
            <br />
            Transform Your Life.
          </h2>

          <p className="footer-description">
            Personalised nutrition guidance designed to help you
            build healthier habits, understand your body and
            create sustainable wellness for life.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-links">

          <h4>Explore</h4>

          <a href="/">Home</a>

          <a href="/about">About Me</a>

          <a href="/reviews">Client Reviews</a>

          <a href="/contact">Book Consultation</a>

        </div>


        {/* ================= CONTACT SECTION ================= */}

        <div className="footer-contact">

          <h4>Let's Connect</h4>

          <p>
            Begin your journey towards
            better health and sustainable wellness.
          </p>

          <a
            href="/contact"
            className="footer-contact-btn"
          >
            Get Started →
          </a>

        </div>


      </div>


      {/* ================= SOCIAL SECTION ================= */}

      <div className="footer-social-section">

        <div className="social-heading">

          <span className="social-line"></span>

          <p>
            CONNECT WITH KAVYA'S NUTRITION
          </p>

          <span className="social-line"></span>

        </div>


        <div className="social-icons">


          {/* Instagram */}

          <a
            href="https://www.instagram.com/kavyasnutrition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Follow on Instagram"
            className="instagram"
          >
            <FaInstagram />
          </a>


          {/* YouTube */}

          <a
            href="https://www.youtube.com/@kavyasnutrition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="Subscribe on YouTube"
            className="youtube"
          >
            <FaYoutube />
          </a>


          {/* Facebook */}

          <a
            href="https://www.facebook.com/kavyasnutrition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Follow on Facebook"
            className="facebook"
          >
            <FaFacebook />
          </a>


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/kavyasnutrition/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="Connect on LinkedIn"
            className="linkedin"
          >
            <FaLinkedin />
          </a>


          {/* WhatsApp */}

          <a
            href="https://wa.me/9553591993"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
            className="whatsapp"
          >
            <FaWhatsapp />
          </a>


          {/* Email */}

          <a
            href="mailto:kavya.why@gmail.com"
            aria-label="Email"
            title="Send Email"
            className="email"
          >
            <FaEnvelope />
          </a>


          {/* Twitter / X */}

          <a
            href="https://x.com/kavyasnutrition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Follow on X"
            className="twitter"
          >
            <FaTwitter />
          </a>


        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kavya's Nutrition.
          All rights reserved.
        </p>


        <p className="footer-made">
          Personalised Nutrition • Sustainable Wellness • Better Living
        </p>


        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>

      </div>


    </footer>

  );

};

export default Footer;