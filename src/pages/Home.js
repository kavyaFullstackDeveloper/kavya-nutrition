import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

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
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (title) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleProceed = () => {
    const query = selectedServices.map((s) => `service=${encodeURIComponent(s)}`).join('&');
    window.location.href = `/contact?${query}`;
  };

  const clearAllServices = () => {
    setSelectedServices([]);
  };

 const services = [
  { img: fatnfit, title: 'Fat Loss & Fitness', text: 'Burn stubborn fat and get fit...', timeNote: '4–6 months (varies)' },
  { img: weightGain, title: 'Healthy Weight Gain', text: 'Build clean muscle...', timeNote: '2–4 months based on metabolism' },
  { img: gut, title: 'Gut Health Reset', text: 'Heal your digestion...', timeNote: 'Min. 4 weeks, lifestyle-dependent' },
  { img: liver, title: 'Fatty Liver Support', text: 'Cleanse your liver...', timeNote: '3–5 months' },
  { img: heart, title: 'Heart Health Nutrition', text: 'Support your heart...', timeNote: 'Approx. 3 months' },
  { img: diabetes, title: 'Diabetes & PCOS Support', text: 'Balance blood sugar...', timeNote: 'Minimum 3–6 months' },
  { img: infertility, title: 'Infertility & Hormonal Health', text: 'Regulate cycles...', timeNote: 'Varies (typically 3–6 months)' },
  { img: menopause, title: 'Menopause Wellness', text: 'Ease symptoms...', timeNote: '4–6 months support' },
  { img: pregnancy, title: 'Postpartum & Pregnancy', text: 'Eat safely...', timeNote: 'Based on trimester (customized)' },
  { img: kids, title: 'Kids Nutrition & Immunity', text: 'Boost growth...', timeNote: 'Ongoing routine building' },
  { img: skincare, title: 'Skin Nutrition', text: 'Clear up skin...', timeNote: '2–3 months for glow-up' },
  { img: haircare, title: 'Hair Nutrition', text: 'Strengthen roots...', timeNote: '2–3 months typical' },
  { img: autoimmunity, title: 'Autoimmune Wellness', text: 'Calm inflammation...', timeNote: 'Long-term nutritional care' },
  { img: vegan, title: 'Vegan Diet Plans', text: 'Stay strong and nourished...', timeNote: 'Lifelong lifestyle, gradual setup' },
  { img: antiaging, title: 'Age-Reversal Diets', text: 'Slow down aging...', timeNote: '3–6 months for visible results' },
  { img: figure, title: 'Figure Shaping Plans', text: 'Tone and sculpt...', timeNote: '3–4 months (based on effort)' },
  { img: respiratory, title: 'Respiratory Wellness', text: 'Breathe better...', timeNote: '2–3 months' },
  { img: cooking, title: 'Healthy Cooking Methods', text: 'Learn quick, wholesome meals...', timeNote: 'Learn at your pace (1 month to start)' },
  { img: mental, title: 'Mental & Brain Wellness', text: 'Lift your mood...', timeNote: '2–4 weeks to feel the shift' },
  { img: motivation, title: 'Morning Mindset & Motivation', text: 'Wake up inspired...', timeNote: 'Daily habit (ongoing)' }
];

  const splitServices = [
    services.slice(0, 5),
    services.slice(5, 10),
    services.slice(10, 15),
    services.slice(15, 20)
  ];

  const sectionTitles = [
    "🌱 Core Health & Healing Foundations",
    "💃 Hormonal Balance & Life Stages",
    "🩺 Targeted Nutrition & Wellness",
    "🧘‍♀️ Inner Vitality, Mindset & Lifestyle"
  ];

  const totalTime = selectedServices.reduce((sum, title) => {
    const service = services.find((s) => s.title === title);
    return sum + (service?.timeEstimate || 0);
  }, 0);

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
      <section className="about-section py-16 px-4 bg-white" id="about">
        <div className="about-wrapper max-w-4xl mx-auto">
          <div className="about-content" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Meet Your Wellness Guide 👩‍⚕️
            </h2>

            <div className="bg-pink-50 p-4 rounded-xl shadow-sm mb-6" data-aos="fade-up" data-aos-delay="100">
              <p className="text-lg leading-relaxed text-gray-800">
                Hello! I’m <strong className="text-primary">Kavya</strong> — a certified Functional Nutritionist and Holistic Health Coach.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-800">
                My approach combines the science of nutrition with a compassionate, heart-led understanding of each person’s unique lifestyle.
              </p>
            </div>

            <ul className="about-list space-y-3 text-lg text-gray-700">
              <li data-aos="fade-up" data-aos-delay="200">🔄 <strong>Reversing</strong> Diabetes, PCOS & Insulin Resistance</li>
              <li data-aos="fade-up" data-aos-delay="300">💇‍♀️ <strong>Hair & Skin Nutrition</strong></li>
              <li data-aos="fade-up" data-aos-delay="400">🔥 <strong>Fat Loss & Metabolic Flexibility</strong></li>
              <li data-aos="fade-up" data-aos-delay="500">📈 <strong>Healthy Weight Gain</strong></li>
              <li data-aos="fade-up" data-aos-delay="600">🌺 <strong>Fertility & Menopause</strong> Support</li>
              <li data-aos="fade-up" data-aos-delay="700">🧠 <strong>Gut-Brain-Immune Axis</strong></li>
              <li data-aos="fade-up" data-aos-delay="800">💖 <strong>Sustainable Lifestyle Upgrades</strong></li>
            </ul>
          </div>
          <div className="about-image-wrapper" data-aos="fade-right" data-aos-delay="200">
            <img src={kavyaAbout} alt="Kavya Wellness Coach" className="about-image" data-aos="zoom-in" data-aos-delay="400" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Choose Your Wellness Goals 💚</h2>
        <p><strong>You can combine them too!</strong></p>

        {splitServices.map((group, idx) => (
          <div key={idx}>
            <h3 className="service-section-title">{sectionTitles[idx]}</h3>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
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
                    {item.timeNote && (
  <div className="time-estimate">
    ⏳ {item.timeNote}
  </div>
)}

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}

        {selectedServices.length > 0 && (
          <div className="proceed-container">
            <button className="proceed-btn" onClick={handleProceed}>
              Proceed with {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} ✅
            </button>

            <div className="selected-summary-box" data-aos="fade-up">
              <h4>🎯 Selected Goals ({selectedServices.length})</h4>
              <ul className="selected-services-list">
                {selectedServices.map((service, idx) => (
                  <li key={idx} className="selected-service-item">
                    {service}
                    <button
                      className="remove-service-btn"
                      onClick={() => toggleService(service)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
           <p className="total-time">🕒 You’ve selected <strong>{selectedServices.length}</strong> goals. Each has its own suggested duration.</p>

              <button className="clear-btn" onClick={clearAllServices}>Clear All ❌</button>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Let’s Begin Your Transformation</h2>
        <p>Join hundreds of women who’ve reclaimed their health and confidence.</p>
        <button onClick={() => window.location.href = '/contact'}>Contact Me 📬</button>
      </section>
    </div>
  );
};

export default Home;
