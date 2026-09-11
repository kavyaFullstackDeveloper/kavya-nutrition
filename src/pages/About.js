import React, { useEffect } from 'react'; 
import './About.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
 
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 
 
import beforeAfterImg from '../assets/kavyatestimony.png'; 
import profileImg from '../assets/kavyaprofile.png'; // Add your recent professional/clinical image here
 
const About = () => { 
  useEffect(() => { 
    AOS.init({ duration: 1000, once: true }); 
  }, []); 
 
  return ( 
    <div className="about-page"> 
      <section className="intro-section" data-aos="fade-down"> 
        <h2>Meet Kavya Yadla 💚</h2> 
        <p className="clinical-subtitle">M.Sc · PGD Clinical Nutrition (P) | Clinical Wellness Consultant</p>
        <p className="intro-text"> 
          Applying precise mathematical logic and clinical physics definitions to human metabolism. 
          With over 2 years of hands-on wellness experience, I bridge the gap between rigorous 
          biochemical science and practical, everyday nutrition.
        </p> 
      </section> 
 
      <section className="testimonial-section split-section" data-aos="fade-up"> 
        <div className="testimonial-text card-style" data-aos="fade-right" data-aos-delay="200"> 
          <h3>✨ My Transformation Story</h3> 
          <p> 
            After my delivery, I struggled with postpartum weight retention, severe hormonal imbalances, and metabolic fatigue. 
            By designing and applying my own evidence-based scientific protocols, I successfully reversed my PMOS (Polyendocrine Metabolic Ovarian Syndrome), 
            achieved targeted fat loss with 100% muscle preservation, and completely restored my metabolic health.
          </p> 
          <p> 
            This personal victory redefined my professional trajectory. I transitioned from corporate physics to the frontlines of clinical wellness. 
            I understand exactly how frustrating it is when standard diets fail. That is why I design custom, metabolic-rate driven protocols 
            rooted in thermodynamic balance to help women reclaim their health and confidence.
          </p> 
        </div> 
        <div className="testimonial-image-wrapper" data-aos="fade-left" data-aos-delay="400"> 
          <img src={beforeAfterImg} alt="Before and After Kavya" className="transformation-image" /> 
        </div> 
      </section> 
 
      <section className="sec-1"> 
        <section className="certifications-section card-style" data-aos="fade-up" data-aos-delay="200"> 
          <h3>🎓 Academic & Clinical Credentials</h3> 
          <ul> 
            <li>🔬 <strong>Post Graduate Diploma in Clinical Nutrition (P)</strong> – IGMPI (Enrollment No: PGCCN 2939)</li> 
            <li>📚 <strong>Master of Science (M.Sc)</strong> – Expertise in Condensed Matter Physics (Applying thermodynamic models to metabolic pathways)</li> 
            <li>🎖️ <strong>2+ Years of Active Clinical Wellness Experience</strong> – Directly mentoring clients globally</li> 
            <li>🤝 <strong>Certified Functional Nutritionist</strong> & Peer-vetted by the Wellsense Community</li> 
            <li>📈 <strong>Data-Driven Methodology</strong> – Specializing in 100% Muscle Preservation and safe 350 kcal metabolic deficit models</li> 
          </ul> 
        </section> 
 
        <section className="services-helped card-style" data-aos="fade-up" data-aos-delay="300"> 
          <h3>Clinical Focus & Expertise 🌿</h3> 
          <p>Customized, thermodynamic-based solutions for:</p> 
          <ul className="help-list"> 
            <li>✔️ PMOS / PCOS & Hormonal Mapping</li> 
            <li>✔️ Safe Diabetes Reversal & HbA1c Management</li> 
            <li>✔️ Postpartum Recovery & Lactation Nutrition</li> 
            <li>✔️ Non-Crash Weight Management (Fat Loss with Muscle Retention)</li> 
            <li>✔️ Figure Correction & Structural Anti-aging Nutrition</li> 
            <li>✔️ Gut Health Optimization & Clinical Vegan Diets</li> 
            <li>✔️ Cardio-Respiratory & Hepatic Therapeutic Support</li> 
          </ul> 
        </section> 
      </section> 

      {/* Profile Highlight Section with Recent Image */}
      <section className="branding-highlight split-section" data-aos="fade-up">
        <div className="branding-image-wrapper" data-aos="fade-right">
          <img src={profileImg} alt="Kavya Yadla Professional" className="profile-recent-image" />
        </div>
        <div className="branding-text" data-aos="fade-left">
          <h3>Let's Connect & Transform Together 🚀</h3>
          <p>
            I actively publish clinical breakdowns, daily mindset shifts, and evidence-based nutrition guides across all social platforms. 
            Follow <strong>@kavyasnutrition</strong> to kickstart your sustainable wellness journey.
          </p>
          <div className="social-media-grid">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link"><FaInstagram /> Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin /> LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link"><FaYoutube /> YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link"><FaFacebook /> Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link"><FaTwitter /> X (Twitter)</a>
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <footer className="footer-action-section">
        <h3>Ready for your 8-Week Transformation?</h3>
        <div className="footer-buttons">
          <a href="https://wa.me" target="_blank" rel="noreferrer" className="action-btn whatsapp-btn"><FaWhatsapp /> Consult via WhatsApp</a>
          <a href="mailto:youremail@gmail.com" className="action-btn email-btn"><FaEnvelope /> Email Enquiries</a>
        </div>
      </footer>
    </div> 
  ); 
}; 
 
export default About;
