import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import {
  FaInstagram, FaLinkedin, FaYoutube, FaTwitter,
  FaFacebook, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';

import mental from '../assets/mental.jpg';
import kavyaAbout from '../assets/kavya.jpg';
import fatnfit from '../assets/fatnfit.webp';
import haircare from '../assets/hair-care.jpeg';
import diabetes from '../assets/diabetes.jpg';
import weightGain from '../assets/weightgain.jpg';
import infertility from '../assets/fertility.jpg';
import skincare from '../assets/skin-care.webp';
import autoimmunity from '../assets/immunite.jpg';
import cooking from '../assets/cooking.jpg';
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
    AOS.init({ duration: 800 });
  }, []);

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (title) => {
    setSelectedServices((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );
  };

  const handleProceed = () => {
    const query = selectedServices.map((s) => `service=${encodeURIComponent(s)}`).join('&');
    window.location.href = `/contact?${query}`;
  };

  const services = [
    { img: fatnfit, title: 'Fat Loss & Fitness', text: 'Burn fat, build strength with tailored nutrition & workouts.' },
    { img: haircare, title: 'Hair Nutrition', text: 'Nourish roots, stop hair fall with science-backed diet.' },
    { img: skincare, title: 'Skin Nutrition', text: 'Glow from within through clean skin-focused eating.' },
    { img: diabetes, title: 'Diabetes & PCOS Support', text: 'Natural control over insulin & hormones.' },
    { img: infertility, title: 'Infertility & Hormonal Health', text: 'Balance your body & support fertility naturally.' },
    { img: weightGain, title: 'Healthy Weight Gain', text: 'Gain clean muscle weight with smart meals.' },
    { img: autoimmunity, title: 'Autoimmune Wellness', text: 'Heal inflammation & fatigue from within.' },
    { img: kids, title: 'Kids Nutrition & Immunity', text: 'Boost immunity, energy & learning in children.' },
    { img: pregnancy, title: 'Postpartum & Pregnancy', text: 'Thrive during & after pregnancy safely.' },
    { img: vegan, title: 'Vegan Diet Plans', text: 'Balanced vegan plans for strong health.' },
    { img: menopause, title: 'Menopause Wellness', text: 'Handle symptoms & balance hormones naturally.' },
    { img: respiratory, title: 'Respiratory Wellness', text: 'Support lung health through diet.' },
    { img: heart, title: 'Heart Health Nutrition', text: 'Lower cholesterol & protect your heart.' },
    { img: liver, title: 'Fatty Liver Support', text: 'Heal & cleanse your liver with food.' },
    { img: antiaging, title: 'Age-Reversal diets', text: 'Look & feel younger with cell-nourishing food.' },
    { img: figure, title: 'Figure Shaping Plans', text: 'Sculpt your dream body with functional eating.' },
    { img: gut, title: 'Gut Health Reset', text: 'Repair digestion and nutrient absorption.' },
    { img: cooking, title: 'Healthy Cooking Methods', text: 'Quick, nourishing meals made simple.' },
    { img: mental, title: 'Mental & Brain Wellness', text: 'Reduce stress & uplift mood with food + habits.' },
    { img: motivation, title: 'Morning Mindset & Motivation', text: 'Start your day like a queen, every day.' }
  ];

  const splitServices = [
    services.slice(0, 7),
    services.slice(7, 14),
    services.slice(14, 20)
  ];

  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Vital Vibes with Kavya 🌿</h1>
          <p>Your journey to wellness begins here.</p>
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-wrapper">
          <div className="about-content" data-aos="fade-right">
            <h2>About Me</h2>
            <p>
              Hi, I’m Kavya — a certified Health & Wellness Coach and Functional Nutritionist.
              I’ve helped people from all walks of life achieve their health goals naturally and sustainably.
            </p>
            <ul className="about-list">
              <li>✅ Diabetes Reversal & Sugar Control</li>
              <li>💆‍♀️ Skin & Hair Nutrition for Radiance</li>
              <li>🔥 Fat Loss & Lean Muscle Building</li>
              <li>📈 Healthy Weight Gain Strategies</li>
              <li>🌸 PCOS / PCOD Support</li>
              <li>🤰 Infertility & Hormonal Balance</li>
              <li>🧠 Autoimmune & Gut Health</li>
            </ul>
          </div>
          <div className="about-image-wrapper" data-aos="fade-left">
            <img src={kavyaAbout} alt="Kavya Wellness Coach" className="about-image" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <h2 style={{ textAlign: 'center' }}>Choose Your Wellness Goals 💚</h2>
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Select one or more that resonate with you. <strong>You can combine them too!</strong>
        </p>

        {splitServices.map((group, idx) => (
          <Swiper
            key={idx}
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            style={{ marginBottom: '2rem' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
          >
            {group.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`service-card ${selectedServices.includes(item.title) ? 'selected' : ''}`}
                  data-aos="fade-up"
                  onClick={() => toggleService(item.title)}
                >
                  <img src={item.img} alt={item.title} className="service-image" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="checkbox">
                    {selectedServices.includes(item.title) ? '✅ Selected' : '🟩 Tap to Choose'}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}

        {selectedServices.length > 0 && (
          <div className="proceed-container">
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed with {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} ✅
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Let’s Begin Your Transformation</h2>
        <p>Join hundreds of women who’ve reclaimed their health and confidence.</p>
        <button onClick={() => window.location.href = '/contact'}>Contact Me 📬</button>
      </section>

      {/* Footer */}
      <footer className="social-footer">
        <h3>Connect with Me 🌐</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/healthy_with_kavya" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank"><FaYoutube /></a>
          <a href="https://www.facebook.com/NutritionWithKavya/" target="_blank"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/kavyasnutrition/" target="_blank"><FaLinkedin /></a>
          <a href="https://wa.me/9553591993" target="_blank"><FaWhatsapp /></a>
          <a href="mailto:kavya.why@gmail.com"><FaEnvelope /></a>
          <a href="https://x.com/kavya_why" target="_blank"><FaTwitter /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
