import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

const Reviews = () => {
  const { t } = useLanguage();
  
  // Initial Reviews List
  const [reviewsList, setReviewsList] = useState([
    { id: 1, name: 'Sameer N.', rating: 5, date: '2026-06-20', text: 'The Double Cheddar Smash is absolutely out of this world! Perfectly smashed, crispy edges, and super juicy on the inside. My weekly cheat meal is locked in!' },
    { id: 2, name: 'Sarah A.', rating: 5, date: '2026-06-18', text: 'Lightning fast delivery to Rafidia! The fries arrived warm and crispy, and the burger wrap keeps the food hot. 10/10 service.' },
    { id: 3, name: 'Omar K.', rating: 5, date: '2026-06-15', text: 'The Swiss Truffle Burger is a culinary masterpiece. That truffle aioli combined with caramelized onions is pure heaven. Strongly recommended!' },
    { id: 4, name: 'Dana R.', rating: 4, date: '2026-06-10', text: 'Amazing taste! The burgers are premium and the portions are decent. The mojito is so refreshing. Definitely ordering again.' },
    { id: 5, name: 'Ahmad M.', rating: 5, date: '2026-06-08', text: 'Best burger joint in Nablus by far. Friendly crew, clean kitchen, and consistent taste every time. Keep it up!' }
  ]);

  // Review Form States
  const [formName, setFormName] = useState('');
  const [formText, setFormText] = useState('');
  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Slider State (First 3 items are slider highlights)
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItems = reviewsList.slice(0, 3);

  // Auto slide every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [sliderItems.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  // Form submit handler
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) {
      setFormError(language === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill out all fields');
      return;
    }
    if (formRating === 0) {
      setFormError(t('reviews.ratingRequired'));
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formName,
      rating: formRating,
      date: new Date().toISOString().split('T')[0],
      text: formText
    };

    setReviewsList([newReview, ...reviewsList]);
    setFormName('');
    setFormText('');
    setFormRating(0);
    setFormError('');
    setFormSuccess(true);

    setTimeout(() => {
      setFormSuccess(false);
    }, 4000);
  };

  // Helper to render star elements
  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-star ${index < count ? 'fa-solid filled' : 'fa-regular empty'}`}
      ></i>
    ));
  };

  return (
    <div className="reviews-page-wrapper page-fade-in">
      <div className="container">
        {/* Page Title */}
        <div className="section-title">
          <h2>{t('reviews.title')} <span>{t('reviews.titleSpan')}</span></h2>
          <p className="reviews-subtitle-text">{t('reviews.subtitle')}</p>
        </div>

        {/* Custom Slider using React State */}
        <div className="reviews-slider-section">
          <div className="slider-wrapper">
            <button className="slider-nav-btn prev" onClick={handlePrevSlide} aria-label="Previous Slide">
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="slider-track">
              {sliderItems.map((item, idx) => (
                <div 
                  key={item.id} 
                  className={`slider-slide ${idx === currentSlide ? 'active' : ''}`}
                >
                  <div className="slide-quote-icon">“</div>
                  <div className="slide-stars">{renderStars(item.rating)}</div>
                  <p className="slide-text">{item.text}</p>
                  <h4 className="slide-author">{item.name}</h4>
                  <span className="slide-date">{item.date}</span>
                </div>
              ))}
            </div>

            <button className="slider-nav-btn next" onClick={handleNextSlide} aria-label="Next Slide">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {sliderItems.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Feedback Row: Grid and Input Form */}
        <div className="reviews-content-row">
          {/* Feedbacks Grid */}
          <div className="feedbacks-grid-col">
            <div className="feedbacks-grid">
              {reviewsList.map((item) => (
                <div key={item.id} className="feedback-card">
                  <div className="feedback-header">
                    <h4>{item.name}</h4>
                    <span className="feedback-date">{item.date}</span>
                  </div>
                  <div className="feedback-stars">{renderStars(item.rating)}</div>
                  <p className="feedback-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Submission Form */}
          <div className="review-form-col">
            <div className="review-form-card">
              <h3>{t('reviews.writeReview')}</h3>
              
              {formSuccess && (
                <div className="form-success-box">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t('reviews.thankYou')}</span>
                </div>
              )}

              {formError && (
                <div className="form-error-box">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleReviewSubmit} className="feedback-submit-form">
                {/* Interactive Star Picker */}
                <div className="star-picker-container">
                  <label>{t('reviews.yourFeedback')}</label>
                  <div className="interactive-stars">
                    {Array.from({ length: 5 }, (_, index) => {
                      const ratingVal = index + 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className="star-pick-btn"
                          onClick={() => setFormRating(ratingVal)}
                          onMouseEnter={() => setHoverRating(ratingVal)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`Rate ${ratingVal} Stars`}
                        >
                          <i 
                            className={`fa-star ${
                              ratingVal <= (hoverRating || formRating) 
                                ? 'fa-solid active-star' 
                                : 'fa-regular inactive-star'
                            }`}
                          ></i>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div className="input-group">
                  <input
                    type="text"
                    required
                    placeholder={t('reviews.yourName')}
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="form-input-field"
                  />
                </div>

                {/* Text Area */}
                <div className="input-group">
                  <textarea
                    rows="4"
                    required
                    placeholder={t('reviews.yourFeedback')}
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    className="form-textarea-field"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-review-btn">
                  <i className="fa-solid fa-paper-plane"></i> {t('reviews.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
