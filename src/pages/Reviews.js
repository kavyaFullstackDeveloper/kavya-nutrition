import React, { useState, useEffect } from 'react';
import { FaStar, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Reviews.css';
import { auth, provider, db, storage } from '../firebase.js';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from "uuid";

const Reviews = () => {
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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setFetching(true);
    try {
      const q = query(collection(db, 'review'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => doc.data());
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setFetching(false);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error('Logout error:', error));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRating = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { review, rating, isTestimonial, image } = formData;

    if (!user || !review || rating < 1) {
      return alert('Please fill all required fields');
    }

    setLoading(true);
    try {
      let imageUrl = '';

 if (image) {
  const safeFileName = image.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
  const path = `review/${v4()}`;
  

  const imageRef = ref(storage, path); // 🔥 THIS MUST BE A STRING

  await uploadBytes(imageRef, image);
  imageUrl = await getDownloadURL(imageRef);
}



      await addDoc(collection(db, 'review'), {
        name: user.displayName,
        email: user.email,
        review,
        rating,
        imageUrl,
        isTestimonial,
        createdAt: serverTimestamp(),
      });

      alert('✅ Review submitted!');

      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }

      setFormData({
        name: '',
        review: '',
        rating: 0,
        isTestimonial: false,
        image: null,
        imagePreview: null,
      });

      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('❌ Upload failed. See console for details.');
    } finally {
      setLoading(false);
    }
  };

   


  const testimonials = reviews.filter(r => r.isTestimonial);
  const clientReviews = reviews.filter(r => !r.isTestimonial);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Client Reviews & Testimonials 💬</h2>

      {/* 🔐 AUTH BUTTONS */}
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        {!user ? (
          <>
            <p style={{ textAlign: 'left', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              Please <strong>sign in</strong> to submit your review 💬
            </p>
            <button onClick={handleLogin} className="google-signin">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Sign in with Google to give a review
            </button>
          </>
        ) : (
          <div>
            <span>👤 {user.displayName}</span>
            <button onClick={handleLogout} className="google-signout" style={{ marginLeft: '10px' }}>
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* 📝 FORM */}
      {user && (
        <form onSubmit={handleSubmit} className="review-form">
          <p>Welcome, {user.displayName}</p>
          <textarea
            name="review"
            placeholder="Your Review"
            value={formData.review}
            onChange={handleChange}
            rows="4"
            required
          />
          <div className="rating-input">
            <label>Your Rating:</label>
            {[1, 2, 3, 4, 5].map((val) => (
              <FaStar
                key={val}
                size={24}
                color={val <= formData.rating ? '#ffc107' : '#e4e5e9'}
                onClick={() => handleRating(val)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {formData.imagePreview && <img src={formData.imagePreview} alt="Preview" className="image-preview" />}
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isTestimonial"
              checked={formData.isTestimonial}
              onChange={handleChange}
            />
            <span>Mark as Testimonial 🌟</span>
          </label>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      )}

      
      {fetching && <p style={{ textAlign: 'center' }}>⏳ Loading reviews...</p>}

    
      {testimonials.length > 0 && (
        <div className="featured-testimonials">
          <h3>🌟 Featured Testimonials</h3>
          <div className="testimonial-list">
            {testimonials.map((r, index) => (
              <div key={index} className="testimonial-card">
                <div className="content">
                  {r.imageUrl && <img src={r.imageUrl} alt="Client" className="client-image" />}
                  <div>
                    <p className="name">{r.name}</p>
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <FaStar key={val} size={16} color={val <= r.rating ? '#ffc107' : '#e4e5e9'} />
                      ))}
                    </div>
                    <p className="review">{r.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      
      {clientReviews.length > 0 ? (
        <div className="all-reviews">
          <h3>All Reviews</h3>
          {clientReviews.map((r, index) => (
            <div key={index} className="review-card">
              <div className="content">
                {r.imageUrl && <img src={r.imageUrl} alt="Client" className="client-image" />}
                <div>
                  <p className="name">{r.name}</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <FaStar key={val} size={16} color={val <= r.rating ? '#ffc107' : '#e4e5e9'} />
                    ))}
                  </div>
                  <p className="review">{r.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !fetching && <p className="no-reviews">💌Your story can inspire many — share your review and make a difference 💬🌟</p>
      )}

      {/* 🌐 SOCIAL LINKS */}
      <footer className="social-footer">
        <h3>Connect with Me 🌐</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/healthy_with_kavya?igsh=MWc5ZjdqZGkxajhhNA==" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
          <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} /></a>
          <a href="https://www.facebook.com/NutritionWithKavya/" target="_blank" rel="noopener noreferrer"><FaFacebook size={28} /></a>
          <a href="https://www.linkedin.com/in/kavyasnutrition/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
          <a href="https://wa.me/9553591993" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={28} /></a>
          <a href="mailto:kavya.why@gmail.com"><FaEnvelope size={28} /></a>
          <a href="https://x.com/kavya_why?t=g1ryT6Wn9z0sZtvOiDk4Kg&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter size={28} /></a>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;