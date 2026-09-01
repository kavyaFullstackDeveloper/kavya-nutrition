import React, { useEffect, useState } from 'react';
import './Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

/* ================= ASSETS ================= */

// Main Kavya Photo
import kavyaAbout from '../assets/kavya-new.jpg';

// Service Images
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

  /* ================= INITIALIZE AOS ================= */

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80
    });

    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);


  /* ================= STATE ================= */

  const [selectedServices, setSelectedServices] = useState([]);


  /* ================= SERVICES DATA ================= */

  const services = [

    {
      img: fatnfit,
      title: 'Fat Loss & Fitness',
      text: 'Build sustainable habits that support healthy fat loss, strength and long-term fitness.',
      timeNote: 'Personalised duration based on your goals'
    },

    {
      img: weightGain,
      title: 'Healthy Weight Gain',
      text: 'A balanced nutrition approach to support healthy weight gain and improved body composition.',
      timeNote: 'Personalised based on metabolism and goals'
    },

    {
      img: gut,
      title: 'Gut Health',
      text: 'Support better digestion, bowel health and overall gut wellness through personalised nutrition.',
      timeNote: 'Lifestyle and symptom dependent'
    },

    {
      img: liver,
      title: 'Fatty Liver Support',
      text: 'Nutrition and lifestyle guidance designed to support metabolic and liver health.',
      timeNote: 'Personalised monitoring recommended'
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
      timeNote: 'Personalised support plan'
    },

    {
      img: infertility,
      title: 'Fertility & Hormonal Health',
      text: 'Nutrition support designed around reproductive health, hormone balance and overall wellbeing.',
      timeNote: 'Individualised based on health history'
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
      timeNote: 'Stage-specific personalised plans'
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
      timeNote: 'Individual response may vary'
    },

    {
      img: haircare,
      title: 'Hair Nutrition',
      text: 'Nutritional strategies that support healthy hair through better nourishment and lifestyle habits.',
      timeNote: 'Consistent nutrition support recommended'
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
      text: 'Balanced plant-based meal strategies designed to meet your nutritional requirements.',
      timeNote: 'Suitable for long-term lifestyle planning'
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
      timeNote: 'Goal and lifestyle dependent'
    },

    {
      img: respiratory,
      title: 'Respiratory Wellness',
      text: 'Lifestyle and nutrition support to promote overall respiratory and immune wellbeing.',
      timeNote: 'Personalised based on individual needs'
    },

    {
      img: cooking,
      title: 'Healthy Cooking',
      text: 'Learn practical cooking strategies that make nutritious eating simple and sustainable.',
      timeNote: 'Build skills at your own pace'
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
      timeNote: 'Designed for long-term consistency'
    }

  ];


  /* ================= SERVICE GROUPS ================= */

  const serviceGroups = [

    {
      title: 'Metabolic Health & Core Wellness',
      services: services.slice(0, 5)
    },

    {
      title: 'Women’s Health & Life Stages',
      services: services.slice(5, 10)
    },

    {
      title: 'Targeted Nutrition & Preventive Wellness',
      services: services.slice(10, 15)
    },

    {
      title: 'Lifestyle, Vitality & Sustainable Habits',
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

    const query = selectedServices
      .map(
        (service) =>
          `service=${encodeURIComponent(service)}`
      )
      .join('&');

    window.location.href = `/contact?${query}`;

  };


  const clearAllServices = () => {
    setSelectedServices([]);
  };


  /* ================= SCROLL TO SERVICES ================= */

  const scrollToGoals = () => {

    document
      .getElementById('wellness-goals')
      ?.scrollIntoView({
        behavior: 'smooth'
      });

  };


  return (

    <main className="home-container">


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="hero-overlay" data-aos="fade-up">

          <p className="hero-eyebrow">
            PERSONALISED NUTRITION • HOLISTIC WELLNESS
          </p>

          <h1>
            Nourish Better.
            <br />
            Live Stronger.
          </h1>

          <p className="hero-description">
            Evidence-informed nutrition guidance designed around
            your body, lifestyle and long-term wellbeing.
          </p>

          <div className="hero-actions">

            <button
              className="hero-primary-btn"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Wellness Journey
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
          <p>SCROLL TO EXPLORE</p>
        </div>

      </section>


      {/* ================= TRUST STRIP ================= */}

      <section className="trust-strip">

        <div className="trust-item">
          <span>01</span>
          <p>Personalised Guidance</p>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span>02</span>
          <p>Sustainable Nutrition</p>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span>03</span>
          <p>Whole-Person Wellness</p>
        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section" id="about">

        <div className="about-wrapper">

          <div
            className="about-content"
            data-aos="fade-right"
          >

            <p className="section-label">
              ABOUT KAVYA
            </p>

            <h2>
              Nutrition Should Fit
              <br />
              Your Life.
            </h2>

            <div className="about-intro">

              <p>
                Hello, I'm <strong>Kavya</strong> — a Functional
                Nutritionist and Holistic Wellness Coach passionate
                about helping people build healthier relationships
                with food and their bodies.
              </p>

              <p>
                My approach brings together nutrition science,
                practical lifestyle strategies and personalised
                guidance — because lasting wellbeing is never
                one-size-fits-all.
              </p>

            </div>


            <ul className="about-list">

              <li>
                <strong>Metabolic Health</strong>
                <span>
                  Diabetes, insulin resistance & sustainable
                  weight management
                </span>
              </li>

              <li>
                <strong>Women's Wellness</strong>
                <span>
                  PCOS, fertility, menopause & life-stage nutrition
                </span>
              </li>

              <li>
                <strong>Gut & Digestive Health</strong>
                <span>
                  Building stronger foundations for overall wellbeing
                </span>
              </li>

              <li>
                <strong>Healthy Lifestyle Design</strong>
                <span>
                  Practical habits that are sustainable in real life
                </span>
              </li>

            </ul>


            <button
              className="about-cta"
              onClick={() => window.location.href = '/about'}
            >
              Discover My Approach →
            </button>

          </div>


          {/* KAVYA IMAGE */}

          <div
            className="about-image-wrapper"
            data-aos="fade-left"
          >

            <img
              src={kavyaAbout}
              alt="Kavya - Functional Nutritionist"
              className="about-image"
            />

            <div className="about-image-badge">
              <span>Personalised</span>
              <strong>Wellness</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

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
            Build Better Health.
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
            <span>01</span>
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
            <span>02</span>
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
            <span>03</span>
            <h3>Implement</h3>
            <p>
              Build realistic food and lifestyle habits that
              can work consistently in your everyday life.
            </p>
          </div>


          <div
            className="process-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>04</span>
            <h3>Transform</h3>
            <p>
              Focus on sustainable progress, better awareness
              and long-term health improvements.
            </p>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

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
            Choose What Matters
            <br />
            Most to Your Health.
          </h2>

          <p>
            Explore personalised nutrition and wellness support
            designed around your unique goals. You can select
            more than one area.
          </p>

        </div>


        {serviceGroups.map((group, groupIndex) => (

          <div
            className="service-group"
            key={group.title}
          >

            <h3 className="service-section-title">
              {group.title}
            </h3>


            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                },
                1280: {
                  slidesPerView: 4
                }
              }}
            >

              {group.services.map((item, index) => (

                <SwiperSlide key={item.title}>

                  <article
                    className={`service-card ${
                      selectedServices.includes(item.title)
                        ? 'selected'
                        : ''
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={(groupIndex * 100) + (index * 50)}
                    onClick={() => toggleService(item.title)}
                  >

                    <div className="service-image-wrapper">

                      <img
                        src={item.img}
                        alt={item.title}
                        className="service-image"
                      />

                    </div>


                    <div className="service-card-content">

                      <h3>{item.title}</h3>

                      <p>{item.text}</p>

                    </div>


                    <div className="service-card-footer">

                      <div className="checkbox">

                        {selectedServices.includes(item.title)
                          ? '✓ Selected'
                          : 'Select this area'
                        }

                      </div>

                      {item.timeNote && (
                        <div className="time-estimate">
                          {item.timeNote}
                        </div>
                      )}

                    </div>

                  </article>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        ))}


        {/* ================= SELECTED SERVICES ================= */}

        {selectedServices.length > 0 && (

          <div
            className="proceed-container"
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
                You've selected{' '}
                <strong>{selectedServices.length}</strong>{' '}
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

                    <span>{service}</span>

                    <button
                      className="remove-service-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleService(service);
                      }}
                      aria-label={`Remove ${service}`}
                    >
                      ×
                    </button>

                  </li>

                ))}

              </ul>


              <p className="total-time">
                Your selected priorities will be considered
                when building a personalised wellness approach.
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
                  Continue to Consultation →
                </button>

              </div>

            </div>

          </div>

        )}

      </section>


      {/* ================= FINAL CTA ================= */}

      <section
        className="cta-section"
        data-aos="zoom-in"
      >

        <p className="section-label">
          YOUR HEALTH. YOUR JOURNEY.
        </p>

        <h2>
          Small Changes.
          <br />
          Lasting Transformation.
        </h2>

        <p>
          Your health journey doesn't need another strict diet.
          It needs an approach that understands your body,
          fits your lifestyle and helps you build habits
          you can actually sustain.
        </p>

        <button
          onClick={() => window.location.href = '/contact'}
        >
          Begin Your Journey →
        </button>

      </section>


    </main>

  );

};


export default Home;