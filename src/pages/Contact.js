import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Custom CSS
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// Import the images
import kavyaImage from '../assets/bd.jpg'; // Background image
import kavyaRightImage from '../assets/kavyaaI.jpg'; // Image on the right side

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ryn72vy',
      'template_2tgucj8',
      form.current,
      'KbipJItAoCbsSyj2O'
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully! ✅');
    }, (error) => {
      console.log(error.text);
      alert('Oops! Something went wrong ❌');
    });

    e.target.reset();
  };

  return (
    <div className="contact-page">
      {/* Background Section */}
      <div className="background-image" style={{ backgroundImage: `url(${kavyaImage})` }}>
        <div className="overlay">
          <div className="contact-container">
            {/* Header Section */}
            <div className="header-section">
              <h1>Let’s Connect 🌿</h1>
              <p>✨ Transform your health journey with personalized wellness solutions. I’m here to help you thrive!</p>
            </div>

            {/* Contact Form Section */}
            <div className="form-and-image">
              <div className="form-section">
                <h2>Send a Message</h2>
                <form ref={form} onSubmit={sendEmail}>
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
                  <button type="submit">📤 Send Message</button>
                </form>
              </div>

              {/* Image Section on the Right */}
              <div className="image-section">
                <img src={kavyaRightImage} alt="Kavya" className="right-image" />
              </div>
            </div>

            {/* Social Icons Section */}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
