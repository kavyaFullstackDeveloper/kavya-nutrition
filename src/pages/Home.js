import React, { useEffect, useState } from 'react';
import './Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

/* ================= ASSETS ================= */

import kavyaAbout from '../assets/kavya-new.jpg';

import mental from '../assets/mental.jpg';
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

  /* ================= STATE ================= */

  const [selectedServices, setSelectedServices] = useState([]);
  const [showWellnessModal, setShowWellnessModal] = useState(false);


  /* ================= AOS ================= */

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
      offset: 70,
      easing: 'ease-out-cubic'
    });

    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };

  }, []);


  /* ================= SERVICES ================= */

  const services = [

    {
      img: fatnfit,
      title: 'Fat Loss & Fitness',
      text: 'Build sustainable habits that support healthy fat loss, strength and long-term fitness.',
      timeNote: 'Personalised to your goals'
    },

    {
      img: weightGain,
      title: 'Healthy Weight Gain',
      text: 'A balanced nutrition approach to support healthy weight gain and improved body composition.',
      timeNote: 'Personalised to your needs'
    },

    {
      img: gut,
      title: 'Gut Health',
      text: 'Support better digestion, bowel health and overall gut wellness through personalised nutrition.',
      timeNote: 'Lifestyle & symptom dependent'
    },

    {
      img: liver,
      title: 'Fatty Liver Support',
      text: 'Nutrition and lifestyle guidance designed to support metabolic and liver health.',
      timeNote: 'Personalised monitoring'
    },

    {
      img: heart,
      title: 'Heart Health',
      text: 'Build heart-supportive eating habits with a focus on sustainable lifestyle changes.',
      timeNote: 'Long-term lifestyle approach'
    },

    {
      img: diabetes,
      title: 'Diabetes & PCOS Support',
      text: 'Nutrition guidance focused on blood sugar balance, metabolic health and hormonal wellbeing.',
      timeNote: 'Personalised support'
    },

    {
      img: infertility,
      title: 'Fertility & Hormonal Health',
      text: 'Nutrition support designed around reproductive health, hormone balance and overall wellbeing.',
      timeNote: 'Individualised approach'
    },

    {
      img: menopause,
      title: 'Menopause Wellness',
      text: 'Support your changing nutritional needs through every stage of the menopause transition.',
      timeNote: 'Ongoing personalised guidance'
    },

    {
      img: pregnancy,
      title: 'Pregnancy & Postpartum Nutrition',
      text: 'Nourishment strategies designed to support maternal wellbeing through pregnancy and recovery.',
      timeNote: 'Stage-specific guidance'
    },

    {
      img: kids,
      title: 'Kids Nutrition & Immunity',
      text: 'Practical nutrition guidance to support healthy growth, eating habits and overall wellbeing.',
      timeNote: 'Family-friendly guidance'
    },

    {
      img: skincare,
      title: 'Skin Nutrition',
      text: 'Support skin health from within by improving overall nutrition and lifestyle foundations.',
      timeNote: 'Individual response varies'
    },

    {
      img: haircare,
      title: 'Hair Nutrition',
      text: 'Nutritional strategies that support healthy hair through better nourishment and lifestyle habits.',
      timeNote: 'Consistent support recommended'
    },

    {
      img: autoimmunity,
      title: 'Autoimmune Wellness',
      text: 'Personalised nutrition and lifestyle support focused on overall wellbeing and healthy routines.',
      timeNote: 'Long-term lifestyle support'
    },

    {
      img: vegan,
      title: 'Plant-Based Nutrition',
      text: 'Balanced plant-based meal strategies designed to help meet your nutritional requirements.',
      timeNote: 'Long-term lifestyle planning'
    },

    {
      img: antiaging,
      title: 'Healthy Ageing',
      text: 'Nutrition and lifestyle strategies focused on healthy ageing, vitality and long-term wellness.',
      timeNote: 'Lifestyle-focused approach'
    },

    {
      img: figure,
      title: 'Body Recomposition',
      text: 'Support strength, body composition and confidence through personalised nutrition strategies.',
      timeNote: 'Goal & lifestyle dependent'
    },

    {
      img: respiratory,
      title: 'Respiratory Wellness',
      text: 'Lifestyle and nutrition support to promote overall respiratory and immune wellbeing.',
      timeNote: 'Personalised to individual needs'
    },

    {
      img: cooking,
      title: 'Healthy Cooking',
      text: 'Learn practical cooking strategies that make nutritious eating simple and sustainable.',
      timeNote: 'Learn at your own pace'
    },

    {
      img: mental,
      title: 'Brain & Mental Wellness',
      text: 'Explore nutrition and lifestyle habits that support cognitive and emotional wellbeing.',
      timeNote: 'Lifestyle-based support'
    },

    {
      img: motivation,
      title: 'Lifestyle & Habit Building',
      text: 'Create sustainable routines that help healthy choices become part of everyday life.',
      timeNote: 'Built for long-term consistency'
    }

  ];


  /* ================= SERVICE GROUPS ================= */

  const serviceGroups = [

    {
      title: 'Metabolic & Lifestyle Health',
      subtitle: 'Build stronger foundations for everyday health.',
      services: services.slice(0, 5)
    },

    {
      title: 'Women’s Health & Life Stages',
      subtitle: 'Nutrition support through changing stages of life.',
      services: services.slice(5, 10)
    },

    {
      title: 'Targeted Nutrition & Preventive Wellness',
      subtitle: 'Nourishment strategies for your individual needs.',
      services: services.slice(10, 15)
    },

    {
      title: 'Vitality & Sustainable Habits',
      subtitle: 'Practical approaches for long-term wellbeing.',
      services: services.slice(15, 20)
    }

  ];


  /* ================= SERVICE SELECTION ================= */

  const toggleService = (title) => {

    setSelectedServices((previousServices) => {

      if (previousServices.includes(title)) {

        return previousServices.filter(
          (service) => service !== title
        );

      }

      return [...previousServices, title];

    });

  };


  /* ================= PROCEED ================= */

  const handleProceed = () => {

    if (selectedServices.length === 0) return;

    const query = selectedServices
      .map(
        (service) =>
          `service=${encodeURIComponent(service)}`
      )
      .join('&');

    window.location.href = `/contact?${query}`;

  };


  /* ================= CLEAR SELECTION ================= */

  const clearAllServices = () => {
    setSelectedServices([]);
  };


  /* ================= SCROLL ================= */

  const scrollToGoals = () => {

    document
      .getElementById('wellness-goals')
      ?.scrollIntoView({
        behavior: 'smooth'
      });

  };


  /* ================= MODAL ================= */

  const openWellnessModal = () => {
    setShowWellnessModal(true);
  };


  const closeWellnessModal = () => {
    setShowWellnessModal(false);
  };


  return (

    <main className="home-container">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        <div className="hero-overlay">

          <div
            className="hero-content"
            data-aos="fade-up"
          >

            <p className="hero-eyebrow">
              PERSONALISED NUTRITION • HOLISTIC WELLNESS
            </p>

            <h1>
              Nourish Better.
              <br />
              <span>Live Stronger.</span>
            </h1>

            <p className="hero-description">
              Evidence-informed nutrition guidance designed
              around your body, lifestyle and long-term wellbeing.
            </p>

            <div className="hero-actions">

              <button
                className="hero-primary-btn"
                onClick={() =>
                  window.location.href = '/contact'
                }
              >
                Start Your Wellness Journey
                <span>→</span>
              </button>

              <button
                className="hero-secondary-btn"
                onClick={scrollToGoals}
              >
                Explore Wellness Areas
              </button>

            </div>

          </div>

          <div className="hero-scroll-indicator">
            <span></span>
            Scroll to explore
          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="trust-strip">

        <div className="trust-item">

          <span>01</span>

          <div>
            <strong>Personalised</strong>
            <p>Guidance</p>
          </div>

        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">

          <span>02</span>

          <div>
            <strong>Sustainable</strong>
            <p>Nutrition</p>
          </div>

        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">

          <span>03</span>

          <div>
            <strong>Whole-Person</strong>
            <p>Wellness</p>
          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT / KAVYA
      ===================================================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-wrapper">


          {/* IMAGE */}

          <div
            className="about-image-wrapper"
            data-aos="fade-left"
            onClick={openWellnessModal}
            role="button"
            tabIndex="0"
            onKeyDown={(event) => {

              if (
                event.key === 'Enter' ||
                event.key === ' '
              ) {
                openWellnessModal();
              }

            }}
            aria-label="Explore personalised wellness approach"
          >

            <div className="about-image-frame">

              <img
                src={kavyaAbout}
                alt="Kavya - Functional Nutritionist"
                className="about-image"
              />

            </div>


            {/* CLICKABLE BADGE */}

            <button
              className="about-image-badge"
              onClick={(event) => {

                event.stopPropagation();
                openWellnessModal();

              }}
            >

              <span>Personalised</span>

              <strong>Wellness</strong>

              <small>
                Discover the approach →
              </small>

            </button>

          </div>


          {/* CONTENT */}

          <div
            className="about-content"
            data-aos="fade-right"
          >

            <p className="section-label">
              MEET KAVYA
            </p>

            <h2>
              Nutrition Should Fit
              <br />
              <span>Your Life.</span>
            </h2>


            <div className="about-intro">

              <p>
                Hello, I'm <strong>Kavya</strong> — a Functional
                Nutritionist and Holistic Wellness Coach passionate
                about helping people build healthier relationships
                with food and their bodies.
              </p>

              <p>
                My approach combines nutrition science, practical
                lifestyle strategies and personalised guidance —
                because lasting wellbeing is never one-size-fits-all.
              </p>

            </div>


            <div className="about-highlights">

              <div className="about-highlight">

                <span>01</span>

                <div>
                  <strong>Metabolic Health</strong>

                  <p>
                    Diabetes, insulin resistance & sustainable
                    weight management
                  </p>
                </div>

              </div>


              <div className="about-highlight">

                <span>02</span>

                <div>
                  <strong>Women's Wellness</strong>

                  <p>
                    PCOS, fertility, menopause & life-stage
                    nutrition
                  </p>
                </div>

              </div>


              <div className="about-highlight">

                <span>03</span>

                <div>
                  <strong>Gut & Digestive Health</strong>

                  <p>
                    Building stronger foundations for overall
                    wellbeing
                  </p>
                </div>

              </div>


              <div className="about-highlight">

                <span>04</span>

                <div>
                  <strong>Healthy Lifestyle Design</strong>

                  <p>
                    Practical habits that can work in real life
                  </p>
                </div>

              </div>

            </div>


            <button
              className="about-cta"
              onClick={() =>
                window.location.href = '/contact'
              }
            >
              Discover My Approach
              <span>→</span>
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="process-section">

        <div
          className="process-heading"
          data-aos="fade-up"
        >

          <p className="section-label">
            YOUR WELLNESS JOURNEY
          </p>

          <h2>
            A Simpler Way to
            <br />
            <span>Build Better Health.</span>
          </h2>

          <p>
            Wellness works best when your nutrition strategy
            is built around you — not the other way around.
          </p>

        </div>


        <div className="process-grid">

          <div
            className="process-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <span className="process-number">
              01
            </span>

            <div className="process-line"></div>

            <h3>Understand</h3>

            <p>
              We begin by understanding your health goals,
              lifestyle, routines and nutritional needs.
            </p>

          </div>


          <div
            className="process-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <span className="process-number">
              02
            </span>

            <div className="process-line"></div>

            <h3>Personalise</h3>

            <p>
              Your nutrition approach is designed around
              your individual needs and practical lifestyle.
            </p>

          </div>


          <div
            className="process-card"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <span className="process-number">
              03
            </span>

            <div className="process-line"></div>

            <h3>Implement</h3>

            <p>
              Build realistic food and lifestyle habits
              that can work consistently in everyday life.
            </p>

          </div>


          <div
            className="process-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <span className="process-number">
              04
            </span>

            <div className="process-line"></div>

            <h3>Transform</h3>

            <p>
              Focus on sustainable progress, better awareness
              and long-term health improvements.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="services-section"
        id="wellness-goals"
      >

        <div
          className="services-heading"
          data-aos="fade-up"
        >

          <p className="section-label">
            AREAS OF EXPERTISE
          </p>

          <h2>
            What Would You Like
            <br />
            <span>to Improve?</span>
          </h2>

          <p>
            Explore personalised nutrition and wellness support
            designed around your unique goals.
            Select one or more areas that matter to you.
          </p>

        </div>


        {/* SERVICE GROUPS */}

        {serviceGroups.map((group, groupIndex) => (

          <div
            className="service-group"
            key={group.title}
            data-aos="fade-up"
          >

            <div className="service-group-heading">

              <div>

                <h3 className="service-section-title">
                  {group.title}
                </h3>

                <p>
                  {group.subtitle}
                </p>

              </div>

              <span className="service-group-number">
                0{groupIndex + 1}
              </span>

            </div>


            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              spaceBetween={22}
              slidesPerView={1.15}

              breakpoints={{

                480: {
                  slidesPerView: 1.3
                },

                640: {
                  slidesPerView: 1.6
                },

                768: {
                  slidesPerView: 2.2
                },

                1024: {
                  slidesPerView: 3
                },

                1280: {
                  slidesPerView: 4

                }

              }}
            >

              {group.services.map((item) => {

                const isSelected =
                  selectedServices.includes(item.title);

                return (

                  <SwiperSlide key={item.title}>

                    <article
                      className={`service-card ${
                        isSelected ? 'selected' : ''
                      }`}
                      onClick={() =>
                        toggleService(item.title)
                      }
                    >

                      <div className="service-image-wrapper">

                        <img
                          src={item.img}
                          alt={item.title}
                          className="service-image"
                        />

                        <div className="service-image-overlay">
                          <span>
                            {isSelected
                              ? '✓ Selected'
                              : 'Select'
                            }
                          </span>
                        </div>

                      </div>


                      <div className="service-card-content">

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.text}
                        </p>

                      </div>


                      <div className="service-card-footer">

                        <span
                          className={
                            isSelected
                              ? 'service-status selected-status'
                              : 'service-status'
                          }
                        >
                          {isSelected
                            ? '✓ Added to your priorities'
                            : '＋ Select this area'
                          }
                        </span>

                        <span className="time-estimate">
                          {item.timeNote}
                        </span>

                      </div>

                    </article>

                  </SwiperSlide>

                );

              })}

            </Swiper>

          </div>

        ))}


        {/* =====================================================
            SELECTED SERVICES
        ===================================================== */}

        {selectedServices.length > 0 && (

          <div
            className="selection-container"
            data-aos="fade-up"
          >

            <div className="selection-heading">

              <p className="section-label">
                YOUR SELECTION
              </p>

              <h3>
                Your Wellness Priorities
              </h3>

              <p>
                You have selected{' '}
                <strong>
                  {selectedServices.length}
                </strong>{' '}
                wellness area
                {selectedServices.length > 1 ? 's' : ''}.
              </p>

            </div>


            <div className="selected-summary-box">

              <ul className="selected-services-list">

                {selectedServices.map((service) => (

                  <li
                    key={service}
                    className="selected-service-item"
                  >

                    <span>
                      {service}
                    </span>

                    <button
                      className="remove-service-btn"
                      onClick={() =>
                        toggleService(service)
                      }
                      aria-label={`Remove ${service}`}
                    >
                      ×
                    </button>

                  </li>

                ))}

              </ul>


              <p className="selection-note">
                These priorities can be shared when you
                continue to your consultation.
              </p>


              <div className="selection-actions">

                <button
                  className="clear-btn"
                  onClick={clearAllServices}
                >
                  Clear Selection
                </button>

                <button
                  className="proceed-btn"
                  onClick={handleProceed}
                >
                  Continue to Consultation
                  <span>→</span>
                </button>

              </div>

            </div>

          </div>

        )}

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="cta-section"
        data-aos="fade-up"
      >

        <div className="cta-inner">

          <p className="section-label">
            YOUR HEALTH. YOUR JOURNEY.
          </p>

          <h2>
            Small Changes.
            <br />
            <span>Lasting Transformation.</span>
          </h2>

          <p>
            Your journey towards better health doesn't require
            perfection. It starts with understanding your body,
            making informed choices and building habits that
            truly work for you.
          </p>

          <button
            onClick={() =>
              window.location.href = '/contact'
            }
          >
            Begin Your Journey
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =====================================================
          PERSONALISED WELLNESS MODAL
      ===================================================== */}

      {showWellnessModal && (

        <div
          className="wellness-modal-overlay"
          onClick={closeWellnessModal}
        >

          <div
            className="wellness-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="wellness-modal-close"
              onClick={closeWellnessModal}
              aria-label="Close"
            >
              ×
            </button>


            <p className="section-label">
              THE KAVYA'S NUTRITION APPROACH
            </p>

            <h2>
              Personalised
              <br />
              Wellness.
            </h2>

            <p className="wellness-modal-intro">
              Nutrition should fit your life —
              not force your life to fit a diet.
            </p>

            <p className="wellness-modal-text">
              Every person has different goals, routines,
              food preferences and lifestyle challenges.
              My approach begins by understanding you first,
              then building practical nutrition and lifestyle
              strategies that can realistically become part
              of your everyday life.
            </p>


            <div className="wellness-modal-points">


              <div>

                <span>01</span>

                <strong>Your Goals</strong>

                <p>
                  Understanding what you genuinely want
                  to improve.
                </p>

              </div>


              <div>

                <span>02</span>

                <strong>Your Lifestyle</strong>

                <p>
                  Creating strategies that work with
                  your everyday routine.
                </p>

              </div>


              <div>

                <span>03</span>

                <strong>Your Nutrition</strong>

                <p>
                  Building practical and sustainable
                  food habits.
                </p>

              </div>


              <div>

                <span>04</span>

                <strong>Your Progress</strong>

                <p>
                  Focusing on consistency rather
                  than perfection.
                </p>

              </div>


            </div>


            <button
              className="wellness-modal-btn"
              onClick={() => {

                closeWellnessModal();

                window.location.href = '/contact';

              }}
            >
              Discover My Approach
              <span>→</span>
            </button>

          </div>

        </div>

      )}

    </main>

  );

};


export default Home;