import React, { useState, useEffect } from 'react';
import {
  FaStar,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

import './Reviews.css';

import { auth, provider, db, storage } from '../firebase.js';

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

import {
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

import { v4 as uuidv4 } from 'uuid';


/* =========================================================
   YOUTUBE TESTIMONIAL VIDEOS

   Future lo new video add cheyyali ante:
   {
     id: 'YOUTUBE_VIDEO_ID',
     title: 'Your Video Title'
   }

   That's all.
========================================================= */

const testimonialVideos = [
  {
    id: '0fyEsfsoQgI',
    title: 'Client Transformation Story',
  },
  {
    id: 'wzlBQvSL5Gs',
    title: 'Client Wellness Journey',
  },
  {
    id: 'd2w5D0PhFFM',
    title: 'Client Success Story',
  },
  {
    id: 'bF2D7n0JCoc',
    title: 'Client Testimonial',
  },
];


const Reviews = () => {

  /* =========================================================
     STATE
  ========================================================= */

  const [user, setUser] = useState(null);

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [fetching, setFetching] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
    isTestimonial: false,
    image: null,
    imagePreview: null,
  });


  /* =========================================================
     AUTH STATE
  ========================================================= */

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();

  }, []);


  /* =========================================================
     FETCH REVIEWS
  ========================================================= */

  useEffect(() => {
    fetchReviews();
  }, []);


  const fetchReviews = async () => {

    setFetching(true);

    try {

      const q = query(
        collection(db, 'review'),
        orderBy('createdAt', 'desc')
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(data);

    } catch (error) {

      console.error(
        'Error fetching reviews:',
        error
      );

    } finally {

      setFetching(false);

    }
  };


  /* =========================================================
     GOOGLE LOGIN
  ========================================================= */

  const handleLogin = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      setUser(result.user);

    } catch (error) {

      console.error(
        'Login failed:',
        error
      );

    }
  };


  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout = () => {

    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => {
        console.error(
          'Logout error:',
          error
        );
      });

  };


  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : value,
    }));

  };


  /* =========================================================
     STAR RATING
  ========================================================= */

  const handleRating = (ratingValue) => {

    setFormData((prev) => ({
      ...prev,
      rating: ratingValue,
    }));

  };


  /* =========================================================
     IMAGE UPLOAD
  ========================================================= */

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
      imagePreview:
        URL.createObjectURL(file),
    }));

  };


  /* =========================================================
     SUBMIT REVIEW
  ========================================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    const {
      review,
      rating,
      isTestimonial,
      image
    } = formData;


    if (
      !user ||
      !review.trim() ||
      rating < 1
    ) {

      alert(
        'Please fill all required fields'
      );

      return;
    }


    setLoading(true);


    try {

      let imageUrl = '';


      /* -----------------------------------------
         UPLOAD IMAGE
      ----------------------------------------- */

      if (image) {

        const safeFileName =
          image.name.replace(
            /[^a-zA-Z0-9.\-_]/g,
            '_'
          );

        const path =
          `review/${uuidv4()}-${safeFileName}`;

        const imageRef =
          ref(storage, path);

        await uploadBytes(
          imageRef,
          image
        );

        imageUrl =
          await getDownloadURL(
            imageRef
          );
      }


      /* -----------------------------------------
         SAVE REVIEW
      ----------------------------------------- */

      await addDoc(
        collection(db, 'review'),
        {
          name: user.displayName,
          email: user.email,
          review: review.trim(),
          rating: Number(rating),
          imageUrl,
          isTestimonial,
          createdAt: serverTimestamp(),
        }
      );


      alert(
        '✅ Review submitted successfully!'
      );


      /* -----------------------------------------
         CLEAN PREVIEW
      ----------------------------------------- */

      if (formData.imagePreview) {

        URL.revokeObjectURL(
          formData.imagePreview
        );

      }


      /* -----------------------------------------
         RESET FORM
      ----------------------------------------- */

      setFormData({
        name: '',
        review: '',
        rating: 0,
        isTestimonial: false,
        image: null,
        imagePreview: null,
      });


      /* -----------------------------------------
         REFRESH REVIEWS
      ----------------------------------------- */

      fetchReviews();


    } catch (error) {

      console.error(
        'Error submitting review:',
        error
      );

      alert(
        '❌ Upload failed. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };


  /* =========================================================
     FILTER REVIEWS
  ========================================================= */

  const testimonials =
    reviews.filter(
      (review) =>
        review.isTestimonial
    );

  const clientReviews =
    reviews.filter(
      (review) =>
        !review.isTestimonial
    );


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <div className="reviews-container">


      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <header className="reviews-header">

        <span className="reviews-eyebrow">
          REAL STORIES • REAL JOURNEYS
        </span>

        <h1 className="reviews-title">
          Success Stories
        </h1>

        <p className="reviews-intro">
          Every health journey is unique.
          Hear from people who chose to
          make their health a priority.
        </p>

      </header>


      {/* =====================================================
          VIDEO TESTIMONIALS
      ===================================================== */}

      <section className="video-testimonials">

        <div className="video-section-heading">

          <span className="section-eyebrow">
            VIDEO TESTIMONIALS
          </span>

          <h2>
            Hear It From My Clients
          </h2>

          <p>
            Real experiences, honest journeys,
            and stories of meaningful change.
          </p>

        </div>


        <div className="testimonial-video-grid">

          {testimonialVideos.map(
            (video) => (

              <article
                className="testimonial-video-card"
                key={video.id}
              >

                <div className="video-wrapper">

                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                </div>


                <div className="video-card-content">

                  <span className="video-label">
                    CLIENT STORY
                  </span>

                  <h3>
                    {video.title}
                  </h3>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =====================================================
          AUTH / REVIEW ACCESS
      ===================================================== */}

      <section className="review-access">

        {!user ? (

          <div className="login-box">

            <div className="login-content">

              <span className="login-icon">
                💬
              </span>

              <div>

                <h3>
                  Have you worked with me?
                </h3>

                <p>
                  Your experience could inspire
                  someone else on their wellness journey.
                </p>

              </div>

            </div>


            <button
              onClick={handleLogin}
              className="google-signin"
            >

              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />

              Sign in with Google to share your story

            </button>

          </div>

        ) : (

          <div className="logged-user">

            <span>
              👋 Welcome, <strong>{user.displayName}</strong>
            </span>

            <button
              onClick={handleLogout}
              className="google-signout"
            >
              Sign Out
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          REVIEW FORM
      ===================================================== */}

      {user && (

        <section className="review-form-section">

          <div className="form-heading">

            <span className="section-eyebrow">
              SHARE YOUR EXPERIENCE
            </span>

            <h2>
              Tell Us About Your Journey
            </h2>

          </div>


          <form
            onSubmit={handleSubmit}
            className="review-form"
          >

            <textarea
              name="review"
              placeholder="Tell us about your experience..."
              value={formData.review}
              onChange={handleChange}
              rows="5"
              required
            />


            {/* RATING */}

            <div className="rating-input">

              <label>
                Your Rating
              </label>

              <div className="star-selector">

                {[1, 2, 3, 4, 5].map(
                  (value) => (

                    <button
                      key={value}
                      type="button"
                      className="star-button"
                      onClick={() =>
                        handleRating(value)
                      }
                      aria-label={`${value} star rating`}
                    >

                      <FaStar
                        size={25}
                        color={
                          value <= formData.rating
                            ? '#c89b3c'
                            : '#d9ddd9'
                        }
                      />

                    </button>

                  )
                )}

              </div>

            </div>


            {/* IMAGE */}

            <div className="image-upload">

              <label>
                Add a photo <span>(optional)</span>
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

            </div>


            {formData.imagePreview && (

              <img
                src={formData.imagePreview}
                alt="Review preview"
                className="image-preview"
              />

            )}


            {/* TESTIMONIAL */}

            <label className="checkbox-label">

              <input
                type="checkbox"
                name="isTestimonial"
                checked={
                  formData.isTestimonial
                }
                onChange={handleChange}
              />

              <span>
                I'd like my review to be considered
                as a featured testimonial 🌟
              </span>

            </label>


            {/* SUBMIT */}

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >

              {loading
                ? 'Submitting...'
                : 'Share My Experience →'}

            </button>

          </form>

        </section>

      )}


      {/* =====================================================
          LOADING
      ===================================================== */}

      {fetching && (

        <div className="spinner">
          <span>Loading client stories...</span>
        </div>

      )}


      {/* =====================================================
          FEATURED TESTIMONIALS
      ===================================================== */}

      {testimonials.length > 0 && (

        <section className="featured-testimonials">

          <div className="section-heading">

            <span className="section-eyebrow">
              CLIENT EXPERIENCES
            </span>

            <h2>
              Words That Mean the Most
            </h2>

          </div>


          <div className="testimonial-list">

            {testimonials.map(
              (review) => (

                <article
                  key={review.id}
                  className="testimonial-card"
                >

                  <div className="content">

                    {review.imageUrl && (

                      <img
                        src={review.imageUrl}
                        alt={`${review.name}'s testimonial`}
                        className="client-image"
                      />

                    )}


                    <div className="review-content">

                      <p className="name">
                        {review.name}
                      </p>


                      <div className="rating">

                        {[1, 2, 3, 4, 5].map(
                          (value) => (

                            <FaStar
                              key={value}
                              size={15}
                              color={
                                value <= review.rating
                                  ? '#c89b3c'
                                  : '#e1e4e1'
                              }
                            />

                          )
                        )}

                      </div>


                      <p className="review">
                        "{review.review}"
                      </p>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

      )}


      {/* =====================================================
          ALL REVIEWS
      ===================================================== */}

      {clientReviews.length > 0 ? (

        <section className="all-reviews">

          <div className="section-heading">

            <span className="section-eyebrow">
              MORE CLIENT STORIES
            </span>

            <h2>
              All Reviews
            </h2>

          </div>


          <div className="review-list">

            {clientReviews.map(
              (review) => (

                <article
                  key={review.id}
                  className="review-card"
                >

                  <div className="content">

                    {review.imageUrl && (

                      <img
                        src={review.imageUrl}
                        alt={`${review.name}'s review`}
                        className="client-image"
                      />

                    )}


                    <div className="review-content">

                      <p className="name">
                        {review.name}
                      </p>


                      <div className="rating">

                        {[1, 2, 3, 4, 5].map(
                          (value) => (

                            <FaStar
                              key={value}
                              size={15}
                              color={
                                value <= review.rating
                                  ? '#c89b3c'
                                  : '#e1e4e1'
                              }
                            />

                          )
                        )}

                      </div>


                      <p className="review">
                        "{review.review}"
                      </p>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

      ) : (

        !fetching && (

          <p className="no-reviews">
            Your story can inspire many —
            share your experience and make a difference. 💚
          </p>

        )

      )}

    </div>

  );
};


export default Reviews;