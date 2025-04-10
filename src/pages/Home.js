import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


import kavyaAbout from '../assets/kavya.jpg';
import fatnfit from '../assets/fatnfit.webp';
import haircare from '../assets/hair-care.jpeg';
import diabetes from '../assets/diabetes.jpg';
import weightGain from '../assets/weightgain.jpg';
import infertility from '../assets/fertility.jpg';
import skincare from '../assets/skin-care.webp';
import autoimmunity from '../assets/immunite.jpg';

// Newly added
import kids from '../assets/kids.jpg';
import pregnancy from '../assets/pregnancy.jpg';
import vegan from '../assets/vegan.jpeg';
import menopause from '../assets/menopause.jpg';
import respiratory from '../assets/respiratory.jpg';
import heart from '../assets/heart.jpg';
import liver from '../assets/liver.jpg';
import antiaging from '../assets/Anti-Aging.webp';
import figure from '../assets/fig-8.jpg';
import gut from '../assets/gut.jpg';
import motivation from '../assets/motivation.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Vital Vibes with Kavya 🌿</h1>
          <p>Your journey to wellness begins here.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-content" data-aos="fade-right">
            <h2>About Me</h2>
            <p>
              Hi, I’m Kavya — a certified Health & Wellness Coach and Functional Nutritionist.
              I’ve helped people from all walks of life achieve their health goals naturally and sustainably.
            </p>
            <p>My areas of expertise include:</p>
            <ul className="about-list">
              <li>✅ Diabetes Reversal & Sugar Control</li>
              <li>💆‍♀️ Skin & Hair Nutrition for Radiance</li>
              <li>🔥 Fat Loss & Lean Muscle Building</li>
              <li>📈 Healthy Weight Gain Strategies</li>
              <li>🌸 PCOS / PCOD Support</li>
              <li>🤰 Infertility & Hormonal Balance</li>
              <li>🧠 Autoimmune & Gut Health</li>
            </ul>
            <p>
              With personalized nutrition plans and lifestyle guidance, I’ve empowered hundreds to feel
              confident, energetic, and truly healthy from within. 🌿
            </p>
          </div>

          <div className="about-image-wrapper" data-aos="fade-left">
            <img src={kavyaAbout} alt="Kavya Wellness Coach" className="about-image" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>What I Offer</h2>
        <div className="services-grid">
          {/* Existing Services */}
          {[ 
            {img: fatnfit, title: 'Fat Loss & Fitness', text: 'Personalized workout & nutrition plans to help you burn fat and stay fit.'},
            {img: haircare, title: 'Hair Nutrition', text: 'Glow from within by healing your hair through the right food and care.'},
            {img: skincare, title: 'Skin Nutrition', text: 'Glow from within by healing your skin through the right food and care.'},
            {img: diabetes, title: 'Diabetes & PCOS Support', text: 'Natural ways to reverse Type 2 Diabetes and manage PCOS symptoms effectively.'},
            {img: infertility, title: 'Infertility & Hormonal Health', text: 'Restore balance and support your fertility with holistic nutrition strategies.'},
            {img: weightGain, title: 'Healthy Weight Gain', text: 'Tailored nutrition for lean and healthy weight gain without processed foods.'},
            {img: autoimmunity, title: 'Autoimmune Wellness', text: 'Boost immunity and manage chronic inflammation through gut-focused care.'},
            
            // New Services
            {img: kids, title: 'Kids Nutrition & Immunity', text: 'Help your child thrive with immunity-boosting and balanced meals.'},
            {img: pregnancy, title: 'Postpartum & Pregnancy', text: 'Support before, during, and after pregnancy with tailored nutrition.'},
            {img: vegan, title: 'Vegan Diet Plans', text: 'Get plant-based balanced meal plans for optimal energy & health.'},
            {img: menopause, title: 'Menopause Wellness', text: 'Balance hormones & reduce symptoms with lifestyle and diet support.'},
            {img: respiratory, title: 'Respiratory Wellness', text: 'Breathe easy with anti-inflammatory foods and lung health support.'},
            {img: heart, title: 'Heart Health Nutrition', text: 'Improve blood flow, lower cholesterol, and protect your heart.'},
            {img: liver, title: 'Fatty Liver Support', text: 'Detox and heal your liver naturally through clean eating.'},
            {img: antiaging, title: 'Anti-Aging Nutrition', text: 'Glow younger with cellular regeneration and nutrient-rich diets.'},
            {img: figure, title: 'Figure Shaping Plans', text: 'Sculpt your dream body with science-backed lifestyle support.'},
            {img: gut, title: 'Gut Health Reset', text: 'Heal digestive issues and improve absorption with gut-focused nutrition.'},
            {img: motivation, title: 'Morning Motivation & Mindset', text: 'Start your day with routines that build confidence and clarity.'}
          ].map((item, index) => (
            <div className="service-card" key={index} data-aos="fade-up">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Let’s Begin Your Transformation</h2>
        <p>Join hundreds of women who’ve reclaimed their health and confidence.</p>
        <button onClick={() => window.location.href = '/contact'}>Contact Me 📬</button>
      </section>
      <footer className="social-footer">
  <h3>Connect with Me 🌐</h3>
  <div className="social-icons">
    <a href="https://www.instagram.com/healthy_with_kavya?igsh=MWc5ZjdqZGkxajhhNA==" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={28} />
    </a>
    <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={28} />
    </a>
    <a href="https://www.facebook.com/share/162mnDh5pF/" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={28} />
    </a>
    <a href="https://www.linkedin.com/in/kavya-nutrition-health-wellness/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={28} />
    </a>
    <a href="https://wa.me/9553591993" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={28} />
    </a>
    <a href="kavya.why@gmail.com">
      <FaEnvelope size={28} />
    </a>
    <a href="https://x.com/kavya_why?t=g1ryT6Wn9z0sZtvOiDk4Kg&s=09" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={28} />
    </a>
  </div>
</footer>

    </div>
  );
};

export default Home;
