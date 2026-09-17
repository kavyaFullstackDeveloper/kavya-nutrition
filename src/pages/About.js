import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

import beforeAfterImg from '../assets/kavyatestimony.png';
import profileImg from '../assets/kavyaprofile.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      offset: 60
    });
  }, []);

  return (
    <main className="about-page">

      {/* ================= INTRO ================= */}
      <section className="about-intro" data-aos="fade-up">

        <span className="about-eyebrow">
          MEET KAVYA
        </span>

        <h1>
          Science in the background.
          <br />
          <em>Practical nutrition in real life.</em>
        </h1>

        <p>
          I’m Kavya Yadla — a nutrition and wellness professional with
          a background in M.Sc Physics and hands-on experience in
          personalised wellness coaching.
        </p>

        <div className="intro-line">
          <span></span>
          <small>
            M.Sc · PGD Clinical Nutrition (P)
          </small>
          <span></span>
        </div>

      </section>


      {/* ================= PROFILE ================= */}
      <section className="about-profile" data-aos="fade-up">

        <div className="profile-image-column">

          <div className="profile-image-frame">
            <img
              src={profileImg}
              alt="Kavya Yadla - Nutrition and Wellness"
            />
          </div>

          <div className="image-caption">
            <span>FOOD</span>
            <i>•</i>
            <span>WELLNESS</span>
            <i>•</i>
            <span>LIFESTYLE</span>
          </div>

        </div>


        <div className="profile-content">

          <span className="section-label">
            MY APPROACH
          </span>

          <h2>
            A science-led approach,
            <br />
            <em>with a human touch.</em>
          </h2>

          <p>
            My journey began with science and education and gradually
            grew into a deeper interest in nutrition, metabolism and
            everyday wellness.
          </p>

          <p>
            Today, through Kavya’s Nutrition, I focus on making nutrition
            easier to understand and easier to follow — with practical
            food choices, personalised guidance and sustainable habits.
          </p>

          <p>
            Because a healthy plan should fit into your life,
            not make your life revolve around the plan.
          </p>

          <div className="profile-stats">

            <div>
              <strong>M.Sc</strong>
              <span>Physics</span>
            </div>

            <div>
              <strong>PGD</strong>
              <span>Clinical Nutrition (P)</span>
            </div>

            <div>
              <strong>2+</strong>
              <span>Years Wellness Experience</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PERSONAL STORY ================= */}
      <section className="story-section" data-aos="fade-up">

        <div className="story-content">

          <span className="section-label">
            WHY I DO THIS
          </span>

          <h2>
            My own journey changed
            <br />
            <em>the way I see nutrition.</em>
          </h2>

          <p>
            Like many people, my relationship with health became more
            personal after pregnancy and motherhood. Understanding my
            own body, food choices and lifestyle helped me realise that
            nutrition is not about following a perfect diet.
          </p>

          <p>
            It is about understanding what your body needs, making
            realistic choices and building habits that you can continue
            long after a diet plan ends.
          </p>

          <div className="story-note">
            <span className="note-mark">“</span>
            <p>
              Healthy eating does not have to be complicated.
              It just needs to make sense for you.
            </p>
          </div>

        </div>


        <div className="story-image">

          <img
            src={beforeAfterImg}
            alt="Kavya's personal wellness journey"
          />

          <div className="story-image-label">
            <span>MY WELLNESS JOURNEY</span>
          </div>

        </div>

      </section>


      {/* ================= CREDENTIALS ================= */}
      <section className="credentials-section" data-aos="fade-up">

        <div className="section-heading">

          <span className="section-label">
            BACKGROUND
          </span>

          <h2>
            Built on science.
            <br />
            <em>Grounded in everyday life.</em>
          </h2>

        </div>


        <div className="credentials-grid">

          <article className="credential-card">
            <span className="card-number">01</span>

            <h3>M.Sc Physics</h3>

            <p>
              Academic background in Physics, with an analytical and
              structured approach to understanding complex systems.
            </p>
          </article>


          <article className="credential-card">
            <span className="card-number">02</span>

            <h3>Clinical Nutrition</h3>

            <p>
              PGD in Clinical Nutrition (P), supporting my continued
              learning in nutrition science and health-focused practice.
            </p>
          </article>


          <article className="credential-card">
            <span className="card-number">03</span>

            <h3>Wellness Experience</h3>

            <p>
              2+ years of practical wellness experience, working with
              people on sustainable food and lifestyle changes.
            </p>
          </article>

        </div>

      </section>


      {/* ================= FOCUS AREAS ================= */}
      <section className="focus-section" data-aos="fade-up">

        <div className="focus-heading">

          <span className="section-label">
            AREAS I WORK WITH
          </span>

          <h2>
            Nutrition that meets you
            <br />
            <em>where you are.</em>
          </h2>

          <p>
            Personalised guidance across different goals, life stages
            and everyday wellness needs.
          </p>

        </div>


        <div className="focus-list">

          <div className="focus-item">
            <span>01</span>
            <h3>Healthy Weight Management</h3>
            <p>Fat loss, healthy weight gain & body composition.</p>
          </div>

          <div className="focus-item">
            <span>02</span>
            <h3>Women’s Wellness</h3>
            <p>PCOS, hormonal health, fertility & life-stage nutrition.</p>
          </div>

          <div className="focus-item">
            <span>03</span>
            <h3>Metabolic & Gut Health</h3>
            <p>Everyday nutrition for metabolic and digestive wellness.</p>
          </div>

          <div className="focus-item">
            <span>04</span>
            <h3>Family Nutrition</h3>
            <p>Practical nutrition for children, families & busy lifestyles.</p>
          </div>

          <div className="focus-item">
            <span>05</span>
            <h3>Plant-Based Nutrition</h3>
            <p>Balanced, practical approaches to plant-forward eating.</p>
          </div>

          <div className="focus-item">
            <span>06</span>
            <h3>Everyday Wellness</h3>
            <p>Food habits, cooking, routines, mindset & sustainable change.</p>
          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className="philosophy-section" data-aos="fade-up">

        <span className="section-label">
          THE KAVYA’S NUTRITION PHILOSOPHY
        </span>

        <h2>
          “Better nutrition isn't about
          <br />
          <em>doing everything perfectly.</em>
          <br />
          It's about doing the right things consistently.”
        </h2>

      </section>


      {/* ================= SOCIAL / FOLLOW ================= */}
      <section className="journey-section" data-aos="fade-up">

        <div className="journey-copy">

          <span className="section-label">
            FOLLOW THE JOURNEY
          </span>

          <h2>
            Nutrition education,
            <br />
            <em>made simple.</em>
          </h2>

          <p>
            I share practical nutrition education, wellness insights,
            food ideas and realistic lifestyle strategies through
            Kavya’s Nutrition.
          </p>

          <p className="follow-text">
            Follow <strong>@kavyasnutrition</strong>
          </p>

          <div className="social-icons">

            <a
              href="https://instagram.com/kavyasnutrition"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/kavyasnutrition/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://youtube.com/@kavyasnutrition"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="https://facebook.com/kavyasnutrition"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="about-cta" data-aos="fade-up">

        <div>
          <span className="section-label">
            READY TO BEGIN?
          </span>

          <h2>
            Let’s make nutrition
            <br />
            <em>work for your life.</em>
          </h2>
        </div>

        <Link to="/contact" className="about-cta-button">
          Book a Session
          <FaArrowRight />
        </Link>

      </section>

    </main>
  );
};

export default About;