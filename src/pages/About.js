import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import beforeAfterImg from '../assets/kavyatestimony.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">
      <section className="intro-section" data-aos="fade-down">
        <h2>Meet Kavya 💚</h2>
        <p>
          I'm Kavya — a certified Health & Wellness Coach & Functional Nutritionist. Through years of coaching,
          personal transformation, and working with real clients, I’ve helped many achieve lasting wellness through
          food, mindset, and lifestyle.
        </p>
      </section>

      <section className="testimonial-section split-section" data-aos="fade-up">
        <div className="testimonial-text card-style" data-aos="fade-right" data-aos-delay="200">
          <h3>✨ My Transformation Story</h3>
          <p>
            After my delivery, I struggled with postpartum belly fat, hormonal imbalance, and early signs of aging.
            Through my own protocols, I reversed my PCOD, reduced stubborn belly fat, rejuvenated my skin, and regained
            my confidence with figure correction and mindful nutrition. This transformation helped me not only feel
            healthier but also inspired a new purpose — to guide others through similar journeys with compassion and
            science-backed strategies.
          </p>
          <p>
            I know firsthand how overwhelming it can feel when nothing seems to work, and your body feels out of sync.
            But with the right food, movement, and mindset approach, I turned things around. That’s why I’m so passionate
            about helping women like me reclaim their health, feel beautiful inside-out, and live a vibrant, confident life.
          </p>
        </div>
        <div className="testimonial-image-wrapper" data-aos="fade-left" data-aos-delay="400">
          <img src={beforeAfterImg} alt="Before and After Kavya" className="transformation-image" />
        </div>
      </section>

      <section className='sec-1'>
        <section className="certifications-section card-style" data-aos="fade-up" data-aos-delay="200">
          <h3>🎓 My Credentials & Experience</h3>
          <ul>
            <li>✔️ Certified Functional Nutritionist</li>
            <li>📚 Specializing in Diabetes & Hormonal Health (in training)</li>
            <li>🎖️ Certified by Wellsense Community</li>
            <li>🤝 Coached & Mentored by Expert Wellness Coaches</li>
            <li>🔬 Years of Personal Research & Hands-on Client Experience</li>
          </ul>
        </section>

        <section className="services-helped card-style" data-aos="fade-up" data-aos-delay="300">
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
      </section>

      <div className='services-helped card-style' data-aos="fade-up" data-aos-delay="400">
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
          <a href="mailto:kavya.why@gmail.com">
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
