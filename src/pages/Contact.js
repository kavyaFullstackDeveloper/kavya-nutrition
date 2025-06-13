import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {
  FaInstagram, FaLinkedin, FaYoutube, FaTwitter,
  FaFacebook, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import kavyaImage from '../assets/bd.jpg';
import kavyaRightImage from '../assets/kavyaaI.jpg';

const Contact = () => {
  const form = useRef();
  const [formVisible, setFormVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const location = useLocation();

  // Extract multiple services from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const allServices = params.getAll('service');
    if (allServices.length > 0) {
      setFormVisible(true);
      setSelectedServices(allServices);
    }
  }, [location.search]);

  const handleRemoveService = (title) => {
    setSelectedServices(prev => prev.filter(s => s !== title));
  };

  const handleAddService = (e) => {
    const value = e.target.value;
    if (value && !selectedServices.includes(value)) {
      setSelectedServices([...selectedServices, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;
    const message = form.current.message.value;
    const servicesText = selectedServices.join(', ');

    // Send email
    emailjs.sendForm(
      'service_ryn72vy',
      'template_2tgucj8',
      form.current,
      'KbipJItAoCbsSyj2O'
    ).then(() => {
      alert('Message sent via Email! ✅');
    }, () => {
      alert('Oops! Email sending failed ❌');
    });

    // WhatsApp redirect
    const whatsappMessage = `Hi Kavya!%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AServices: ${encodeURIComponent(servicesText)}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/9553591993?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    e.target.reset();
    setSelectedServices([]);
  };

  const allServiceOptions = [
    "Fat Loss & Fitness",
    "Hair Nutrition",
    "Skin Nutrition",
    "Diabetes & PCOS Support",
    "Infertility & Hormonal Health",
    "Healthy Weight Gain",
    "Autoimmune Wellness",
    "Kids Nutrition & Immunity",
    "Postpartum & Pregnancy",
    "Vegan Diet Plans",
    "Menopause Wellness",
    "Respiratory Wellness",
    "Heart Health Nutrition",
    "Fatty Liver Support",
    "Age-Reversal diets",
    "Figure Shaping Plans",
    "Gut Health Reset",
    "Healthy & Easy Cooking Methods",
    "Mental Wellbeing & Brain Health",
    "Morning Motivation & Mindset"
  ];

  return (
    <div className="contact-page">
      <div className="background-image" style={{ backgroundImage: `url(${kavyaImage})` }}>
        <div className="overlay">
          <div className="header-section">
            <h1>Let’s Connect 🌿</h1>
            <p>✨ Transform your health journey with personalized wellness solutions. I’m here to help you thrive!</p>
          </div>

          <div className="button-wrapper">
            <button className="open-form-btn" onClick={() => setFormVisible(!formVisible)}>
              <img src={kavyaRightImage} alt="Open Form" />
              <span>{formVisible ? 'Close Form' : 'Click to Get Your Personalized Wellness Plan ✨'}</span>
            </button>
          </div>

          <div className={`form-section ${formVisible ? 'show' : 'hide'}`}>
            <form ref={form} onSubmit={handleSubmit}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <input type="tel" name="user_phone" placeholder="Your Phone Number" pattern="[0-9]{10}" required />

              <div className="selected-services">
                <label>Selected Services:</label>
                {selectedServices.length === 0 && <p>No service selected yet.</p>}
                <ul>
                  {selectedServices.map((service, idx) => (
                    <li key={idx}>
                      {service} <button type="button" onClick={() => handleRemoveService(service)}>❌</button>
                    </li>
                  ))}
                </ul>
              </div>

              <select onChange={handleAddService} defaultValue="">
                <option value="" disabled>+ Add Another Service</option>
                {allServiceOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>

              {/* Hidden input to send services via EmailJS */}
              <input type="hidden" name="service_interest" value={selectedServices.join(', ')} />

              <textarea name="message" rows="4" placeholder="Your Message" required />
              <button type="submit">📤 Send via Email & WhatsApp</button>
            </form>
          </div>

          <div className="social-icons">
            <h3>Follow & Connect with Me 💌</h3>
            <div className="icons-row">
              <a href="https://www.instagram.com/healthy_with_kavya" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.facebook.com/NutritionWithKavya/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.linkedin.com/in/kavyasnutrition/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/9553591993" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="mailto:kavya.why@gmail.com"><FaEnvelope /></a>
              <a href="https://x.com/kavya_why" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
