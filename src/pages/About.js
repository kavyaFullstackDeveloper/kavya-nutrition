import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import beforeAfterImg from '../assets/kavyatestimony.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <section className="intro-section" data-aos="fade-up">
        <h2>Meet Kavya 💚</h2>
        <p>
          I'm Kavya — a certified Health & Wellness Coach & Functional Nutritionist. Through years of coaching,
          personal transformation, and working with real clients, I’ve helped many achieve lasting wellness through
          food, mindset, and lifestyle.
        </p>
      </section>

      <section className="testimonial-section split-section" data-aos="fade-up">
        <div className="testimonial-text card-style">
          <h3>✨ My Transformation Story</h3>
          <p>
            After my delivery, I struggled with postpartum belly fat, hormonal imbalance, and early signs of aging.
            Through my own protocols, I reversed my PCOD, reduced stubborn belly fat, rejuvenated my skin, and regained
            my confidence with figure correction and mindful nutrition.
          </p>
        </div>
        <div className="testimonial-image-wrapper">
          <img src={beforeAfterImg} alt="Before and After Kavya" className="transformation-image" />
        </div>
      </section>

      <section className="certifications-section card-style" data-aos="fade-up">
        <h3>🎓 My Credentials & Experience</h3>
        <ul>
          <li>✔️ Certified Functional Nutritionist</li>
          <li>📚 Specializing in Diabetes & Hormonal Health (in training)</li>
          <li>🎖️ Certified by Wellsense Community</li>
          <li>🤝 Coached & Mentored by Expert Wellness Coaches</li>
          <li>🔬 Years of Personal Research & Hands-on Client Experience</li>
        </ul>
      </section>

      <section className="services-helped card-style" data-aos="fade-up">
        <h3>How I Help Others 🌿</h3>
        <p>I offer personalized solutions for:</p>
        <ul className="help-list">
          <li>Diabetes Reversal</li>
          <li>Fat Loss & Weight Gain</li>
          <li>Skin & Hair Nutrition</li>
          <li>PCOD/PCOS & Infertility</li>
          <li>Postpartum & Menopause Support</li>
          <li>Vegan & Gut Health Plans</li>
          <li>Respiratory, Liver, and Heart Health</li>
          <li>Figure Correction & Anti-aging Protocols</li>
          <li>Daily Mindset & Morning Motivation</li>
        </ul>
      </section>
       <div className="social-icons">
                    <h3>Follow & Connect with Me 💌</h3>
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
                      </div>
    </div>
  );
};

export default About;
