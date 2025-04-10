import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';  // Importing the CSS file for styling

import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
    isTestimonial: false,
    image: null,
    imagePreview: null,
  });

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
      setFormData({ 
        ...formData, 
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, review, rating, imagePreview } = formData;
    if (name && review && rating > 0) {
      setReviews([...reviews, { ...formData, imagePreview }]);
      setFormData({
        name: '',
        review: '',
        rating: 0,
        isTestimonial: false,
        image: null,
        imagePreview: null,
      });
    } else {
      alert('Please fill in all fields and add a rating 🌟');
    }
  };

  const testimonials = reviews.filter(r => r.isTestimonial);
  const clientReviews = reviews.filter(r => !r.isTestimonial);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Client Reviews & Testimonials 💬</h2>

      {/* Featured Testimonials */}
      {testimonials.length > 0 && (
        <div className="featured-testimonials">
          <h3>🌟 Featured Testimonials</h3>
          <div className="testimonial-list">
            {testimonials.map((r, index) => (
              <div key={index} className="testimonial-card">
                <div className="content">
                  {r.imagePreview && (
                    <img src={r.imagePreview} alt="Client" className="client-image" />
                  )}
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

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        {formData.imagePreview && (
          <img src={formData.imagePreview} alt="Preview" className="image-preview" />
        )}
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isTestimonial"
            checked={formData.isTestimonial}
            onChange={handleChange}
          />
          <span>Mark as Testimonial 🌟</span>
        </label>
        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>

      {/* Client Reviews */}
      {clientReviews.length > 0 ? (
        <div className="all-reviews">
          <h3>All Reviews</h3>
          {clientReviews.map((r, index) => (
            <div key={index} className="review-card">
              <div className="content">
                {r.imagePreview && (
                  <img src={r.imagePreview} alt="Client" className="client-image" />
                )}
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
</footer>

    </div>
  );
};

export default Reviews;
