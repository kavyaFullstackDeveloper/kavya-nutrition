import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import kavyaImage from '../assets/bd.jpg';
import kavyaRightImage from '../assets/kavyaaI.jpg';

const Contact = () => {
  const form = useRef();
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;
    const service = form.current.service_interest.value;
    const message = form.current.message.value;

    emailjs.sendForm(
      'service_ryn72vy',
      'template_2tgucj8',
      form.current,
      'KbipJItAoCbsSyj2O'
    ).then((result) => {
      console.log(result.text);
      alert('Message sent via Email! ✅');
    }, (error) => {
      console.log(error.text);
      alert('Oops! Email sending failed ❌');
    });

    const whatsappMessage = `Hi Kavya!%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/9553591993?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    e.target.reset();
  };

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
              <select name="service_interest" required>
                <option value="">-- Select a Service --</option>
                <option value="wellness_coaching">🌿 Personal Wellness Coaching</option>
                <option value="fitness_programs">🔥 Fat Loss & Fitness Programs</option>
                <option value="skin_nutrition">💆‍♀️ Skin Nutrition</option>
                <option value="hair_nutrition">💇‍♀️ Hair Nutrition</option>
                <option value="diabetes_support">🩺 Diabetes & PCOS Support</option>
                <option value="postpartum_care">🤰 Postpartum & Pregnancy Care</option>
                <option value="kids_nutrition">👶 Kids Nutrition & Immunity</option>
                <option value="vegan_diet">🌱 Vegan Diet Plans</option>
                <option value="menopause_wellness">🧘 Menopause Wellness</option>
                <option value="respiratory_health">🌬️ Respiratory Health</option>
                <option value="heart_health">❤️ Heart Health Nutrition</option>
                <option value="fatty_liver">🧬 Fatty Liver & Metabolic Reset</option>
                <option value="anti_aging">🔄 Anti-Aging & Cellular Nutrition</option>
                <option value="figure_correction">💃 Figure Correction & Body Shaping</option>
                <option value="gut_health">🦠 Gut Health Reset</option>
                <option value="morning_motivation">🌞 Morning Motivation & Mindset Coaching</option>
              </select>
              <textarea name="message" rows="4" placeholder="Your Message" required />
              <button type="submit">📤 Send via Email & WhatsApp</button>
            </form>
          </div>

          <div className="social-icons">
            <h3>Follow & Connect with Me 💌</h3>
            <div className="icons-row">
              <a href="https://www.instagram.com/healthy_with_kavya" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.facebook.com/share/162mnDh5pF/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
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
