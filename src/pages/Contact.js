import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

import kavyaImage from '../assets/bd.jpg';
import kavyaRightImage from '../assets/kavyaaI.jpg';

const Contact = () => {
  const form = useRef();
  const location = useLocation();

  const [formVisible, setFormVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const allServiceOptions = [
    'Fat Loss & Fitness',
    'Hair Nutrition',
    'Skin Nutrition',
    'Diabetes & PCOS Support',
    'Infertility & Hormonal Health',
    'Healthy Weight Gain',
    'Autoimmune Wellness',
    'Kids Nutrition & Immunity',
    'Postpartum & Pregnancy',
    'Vegan Diet Plans',
    'Menopause Wellness',
    'Respiratory Wellness',
    'Heart Health Nutrition',
    'Fatty Liver Support',
    'Age-Reversal diets',
    'Figure Shaping Plans',
    'Gut Health Reset',
    'Healthy & Easy Cooking Methods',
    'Mental Wellbeing & Brain Health',
    'Morning Motivation & Mindset',
  ];

  // Read services coming from Home / other pages
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servicesFromUrl = params.getAll('service');

    if (servicesFromUrl.length > 0) {
      setSelectedServices(
        [...new Set(servicesFromUrl)]
      );
      setFormVisible(true);
    }
  }, [location.search]);

  const handleRemoveService = (service) => {
    setSelectedServices((prev) =>
      prev.filter((item) => item !== service)
    );
  };

  const handleAddService = (e) => {
    const value = e.target.value;

    if (value && !selectedServices.includes(value)) {
      setSelectedServices((prev) => [...prev, value]);
    }

    e.target.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert('Please select at least one wellness area. 🌿');
      return;
    }

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const phone = form.current.user_phone.value;
    const message = form.current.message.value;

    const servicesText = selectedServices.join(', ');

    setIsSending(true);

    try {
      // -----------------------------
      // EMAILJS
      // -----------------------------
      await emailjs.sendForm(
        'service_ryn72vy',
        'template_2tgucj8',
        form.current,
        'KbipJItAoCbsSyj2O'
      );

      // -----------------------------
      // WHATSAPP
      // -----------------------------
      const whatsappMessage =
        `Hi Kavya!%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Wellness Area: ${encodeURIComponent(servicesText)}%0A%0A` +
        `Message: ${encodeURIComponent(message)}`;

      const whatsappUrl =
        `https://wa.me/9553591993?text=${whatsappMessage}`;

      window.open(whatsappUrl, '_blank');

      alert(
        'Thank you! Your request has been sent successfully. 🌿'
      );

      form.current.reset();
      setSelectedServices([]);
      setFormVisible(false);
    } catch (error) {
      console.error('EmailJS Error:', error);

      alert(
        'Something went wrong while sending your request. Please try again or contact me on WhatsApp.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* Soft background image */}
      <div
        className="contact-background"
        style={{
          backgroundImage: `url(${kavyaImage})`,
        }}
      />

      <div className="contact-overlay" />

      <section className="contact-container">

        {/* =====================================
            HEADER
        ====================================== */}
        <div className="contact-heading">

          <span className="contact-eyebrow">
            PERSONALISED NUTRITION • WELLNESS COACHING
          </span>

          <h1>
            Let’s Begin Your
            <span> Wellness Journey.</span>
          </h1>

          <p>
            Tell me a little about what you would like to work on.
            Together, we can create a practical approach that fits
            your body, lifestyle and everyday routine.
          </p>

        </div>


        {/* =====================================
            MAIN CONTENT
        ====================================== */}
        <div className="contact-layout">

          {/* ===================================
              LEFT — INTRO / TRUST
          ==================================== */}
          <aside className="contact-intro">

            <div className="profile-card">

              <div className="profile-image-wrapper">
                <img
                  src={kavyaRightImage}
                  alt="Kavya - Nutrition and Wellness"
                />
              </div>

              <div className="profile-content">
                <span>WITH KAVYA</span>

                <h2>
                  Nutrition that
                  <br />
                  fits real life.
                </h2>

                <p>
                  Personalised nutrition guidance focused on
                  sustainable habits, better nourishment and
                  long-term wellbeing.
                </p>
              </div>

            </div>


            {/* Trust points */}
            <div className="contact-points">

              <div className="contact-point">
                <div className="point-icon">
                  <FaCheck />
                </div>

                <div>
                  <h3>Personalised Approach</h3>
                  <p>
                    Your food, routine and goals are considered
                    together.
                  </p>
                </div>
              </div>


              <div className="contact-point">
                <div className="point-icon">
                  <FaCheck />
                </div>

                <div>
                  <h3>Practical Guidance</h3>
                  <p>
                    Simple strategies designed for everyday life.
                  </p>
                </div>
              </div>


              <div className="contact-point">
                <div className="point-icon">
                  <FaCheck />
                </div>

                <div>
                  <h3>Long-Term Wellness</h3>
                  <p>
                    Focus on sustainable habits rather than
                    temporary fixes.
                  </p>
                </div>
              </div>

            </div>


            {/* WhatsApp quick contact */}
            <a
              href="https://wa.me/9553591993"
              target="_blank"
              rel="noopener noreferrer"
              className="direct-whatsapp"
            >
              <span className="whatsapp-icon">
                <FaWhatsapp />
              </span>

              <span>
                <small>Prefer a quick chat?</small>
                <strong>Message me on WhatsApp</strong>
              </span>

              <FaArrowRight className="whatsapp-arrow" />
            </a>

          </aside>


          {/* ===================================
              RIGHT — FORM
          ==================================== */}
          <section className="consultation-card">

            {!formVisible ? (

              <div className="consultation-intro">

                <span className="form-eyebrow">
                  START HERE
                </span>

                <h2>
                  Tell me what
                  <br />
                  you need support with.
                </h2>

                <p>
                  Choose the wellness area you would like
                  to discuss. You can select more than one.
                </p>

                <button
                  className="start-consultation-btn"
                  onClick={() => setFormVisible(true)}
                >
                  <span>Start Your Consultation</span>
                  <FaArrowRight />
                </button>

                <div className="consultation-note">
                  <span>🌿</span>
                  Personalised guidance. Realistic changes.
                </div>

              </div>

            ) : (

              <div className="form-content">

                <div className="form-header">

                  <span className="form-eyebrow">
                    YOUR WELLNESS REQUEST
                  </span>

                  <h2>
                    Let’s talk about
                    <br />
                    your goals.
                  </h2>

                  <p>
                    Share your details below and I’ll get
                    back to you.
                  </p>

                </div>


                <form
                  ref={form}
                  onSubmit={handleSubmit}
                >

                  {/* Name */}
                  <div className="form-field">

                    <label htmlFor="user_name">
                      Your Name
                    </label>

                    <input
                      id="user_name"
                      type="text"
                      name="user_name"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  {/* Email + Phone */}
                  <div className="form-row">

                    <div className="form-field">

                      <label htmlFor="user_email">
                        Email Address
                      </label>

                      <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>


                    <div className="form-field">

                      <label htmlFor="user_phone">
                        Phone Number
                      </label>

                      <input
                        id="user_phone"
                        type="tel"
                        name="user_phone"
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                      />

                    </div>

                  </div>


                  {/* Selected Services */}
                  <div className="form-field">

                    <label>
                      Wellness Areas
                    </label>

                    <div className="service-selection-box">

                      {selectedServices.length > 0 ? (

                        <div className="selected-service-list">

                          {selectedServices.map((service) => (

                            <span
                              className="service-pill"
                              key={service}
                            >
                              {service}

                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveService(service)
                                }
                                aria-label={`Remove ${service}`}
                              >
                                ×
                              </button>
                            </span>

                          ))}

                        </div>

                      ) : (

                        <p className="no-service">
                          Select one or more areas below
                        </p>

                      )}

                    </div>


                    <select
                      defaultValue=""
                      onChange={handleAddService}
                    >
                      <option
                        value=""
                        disabled
                      >
                        + Add a wellness area
                      </option>

                      {allServiceOptions
                        .filter(
                          (service) =>
                            !selectedServices.includes(service)
                        )
                        .map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                    </select>

                    {/* EmailJS hidden field */}
                    <input
                      type="hidden"
                      name="service_interest"
                      value={selectedServices.join(', ')}
                    />

                  </div>


                  {/* Message */}
                  <div className="form-field">

                    <label htmlFor="message">
                      Tell me a little about your goal
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="What would you like support with?"
                      required
                    />

                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="submit-consultation-btn"
                    disabled={isSending}
                  >
                    <span>
                      {isSending
                        ? 'Sending...'
                        : 'Send My Request'}
                    </span>

                    {!isSending && <FaArrowRight />}

                  </button>


                  <p className="form-footer-note">
                    Your details are used only to respond to
                    your consultation request.
                  </p>

                </form>

              </div>

            )}

          </section>

        </div>

      </section>

    </main>
  );
};

export default Contact;