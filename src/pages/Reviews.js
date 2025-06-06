import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';
import { auth, provider, db, storage } from '../firebase';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';
import { signOut } from 'firebase/auth'; 


const Reviews = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
    isTestimonial: false,
    image: null,
    imageBase64: '',
    imagePreview: null,
  });
  const [loading, setLoading] = useState(false);

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
    fetchReviews(); // ✅ Fetch after auth state determined
  });
}, []);


  const fetchReviews = async () => {
    const snapshot = await getDocs(collection(db, 'reviews'));
    const data = snapshot.docs.map(doc => doc.data());
    setReviews(data);
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
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRating = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file,
        imageBase64: reader.result,
        imagePreview: reader.result
      });
    };
    reader.readAsDataURL(file);
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
    let imageUrl = '';                // default empty – we’ll fill it only if a file exists

    if (image) {                      // <<— guard!
      const imageRef = ref(storage, `reviews/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, 'reviews'), {
      name: user.displayName,
      email: user.email,
      review,
      rating,
      imageBase64: formData.imageBase64 || null,
      imageUrl,                       // save the Storage URL too, if you like
      isTestimonial,
      createdAt: serverTimestamp(),
    });

    alert('✅ Review submitted!');
    setFormData({
      name: '',
      review: '',
      rating: 0,
      isTestimonial: false,
      image: null,
      imageBase64: '',
      imagePreview: null,
    });
    fetchReviews();
  } catch (error) {
    console.error('Error submitting review:', error);
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
    <button onClick={handleLogin} className="google-signin">
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    style={{ width: '20px', height: '20px' }}
  />
  Sign in with Google
</button>

  ) : (
    <div>
      <span>👤 {user.displayName}</span>
      <button onClick={handleLogout} className="google-signout" style={{ marginLeft: '10px' }}>
        Sign Out
      </button>
    </div>
  )}
</div>


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
          <input type="file" accept="image/" onChange={handleImageChange} />
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

      {testimonials.length > 0 && (
        <div className="featured-testimonials">
          <h3>🌟 Featured Testimonials</h3>
          <div className="testimonial-list">
            {testimonials.map((r, index) => (
              <div key={index} className="testimonial-card">
                <div className="content">
                  {r.imageBase64 && <img src={r.imageBase64} alt="Client" className="client-image" />}

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
                {r.imageBase64 && <img src={r.imageBase64} alt="Client" className="client-image" />}

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
        <p className="no-reviews">No reviews yet. Be the first 💌</p>
      )}

      <footer className="social-footer">
        <h3>Connect with Me 🌐</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/healthy_with_kavya?igsh=MWc5ZjdqZGkxajhhNA==" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
          <a href="https://www.youtube.com/@Kavyanutritionist" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} /></a>
          <a href="https://www.facebook.com/share/162mnDh5pF/" target="_blank" rel="noopener noreferrer"><FaFacebook size={28} /></a>
          <a href="https://www.linkedin.com/in/kavya-nutrition-health-wellness/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
          <a href="https://wa.me/9553591993" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={28} /></a>
          <a href="mailto:kavya.why@gmail.com"><FaEnvelope size={28} /></a>
          <a href="https://x.com/kavya_why?t=g1ryT6Wn9z0sZtvOiDk4Kg&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter size={28} /></a>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
