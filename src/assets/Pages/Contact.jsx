import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
    urgency: 'normal'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.'
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: '' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
        address: '',
        urgency: 'normal'
      });
    }, 5000);
  };

  const faqs = [
    {
      question: "How quickly can you respond to service requests?",
      answer: "We typically respond within 30 minutes during business hours and within 2 hours for emergency requests. Our 24/7 support team is always ready to assist you."
    },
    {
      question: "What areas do you service?",
      answer: "We currently serve over 25 cities across the region. You can check service availability by entering your zip code in our service locator or during the booking process."
    },
    {
      question: "Are your professionals background checked?",
      answer: "Yes, all our professionals undergo thorough background verification, including identity verification, experience validation, and police verification before they can join our platform."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule your booking up to 2 hours before the scheduled time without any charge. Cancellations within 2 hours may incur a small fee."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we offer 24/7 emergency services for plumbing, electrical, and HVAC issues. Emergency service calls may have additional charges."
    },
    {
      question: "How do I pay for services?",
      answer: "We accept all major credit cards, debit cards, UPI, and digital wallets. You can pay online during booking or after service completion."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`contact-particle particle-${i + 1}`}></div>
          ))}
        </div>
        
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get In <span className="hero-highlight">Touch</span>
          </h1>
          <p className="contact-hero-description">
            Have questions? We're here to help 24/7. Reach out to us anytime.
          </p>
          <div className="contact-hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">Support</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">30min</span>
              <span className="hero-stat-label">Response</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="contact-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon-wrapper">
                <span className="info-card-icon">📞</span>
                <div className="info-icon-glow"></div>
              </div>
              <h3 className="info-card-title">Call Us</h3>
              <p className="info-card-detail">+1 (234) 567-890</p>
              <p className="info-card-detail">+1 (234) 567-891</p>
              <p className="info-card-note">24/7 Emergency Support</p>
              <button className="info-card-btn">Call Now</button>
            </div>

            <div className="info-card">
              <div className="info-card-icon-wrapper">
                <span className="info-card-icon">📧</span>
                <div className="info-icon-glow"></div>
              </div>
              <h3 className="info-card-title">Email Us</h3>
              <p className="info-card-detail">support@karyon.com</p>
              <p className="info-card-detail">info@karyon.com</p>
              <p className="info-card-note">24hr response time</p>
              <button className="info-card-btn">Send Email</button>
            </div>

            <div className="info-card">
              <div className="info-card-icon-wrapper">
                <span className="info-card-icon">📍</span>
                <div className="info-icon-glow"></div>
              </div>
              <h3 className="info-card-title">Visit Us</h3>
              <p className="info-card-detail">123 Service Street</p>
              <p className="info-card-detail">Cityville, ST 12345</p>
              <p className="info-card-note">Mon-Sun: 24/7</p>
              <button className="info-card-btn">Get Directions</button>
            </div>

            <div className="info-card">
              <div className="info-card-icon-wrapper">
                <span className="info-card-icon">💬</span>
                <div className="info-icon-glow"></div>
              </div>
              <h3 className="info-card-title">Live Chat</h3>
              <p className="info-card-detail">Chat with our team</p>
              <p className="info-card-detail">Instant responses</p>
              <p className="info-card-note">Online 24/7</p>
              <button className="info-card-btn">Start Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="form-header">
            <span className="form-badge">Get in Touch</span>
            <h2 className="form-title">
              Send Us a <span className="title-accent">Message</span>
            </h2>
            <p className="form-description">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {formStatus.submitted && (
            <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
              <span className="status-icon">{formStatus.success ? '✓' : '⚠'}</span>
              <p>{formStatus.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  <span className="label-icon">📞</span>
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  <span className="label-icon">🛠️</span>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select a service</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="painting">Painting</option>
                  <option value="hvac">HVAC</option>
                  <option value="moving">Moving</option>
                  <option value="gardening">Gardening</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">
                  <span className="label-icon">📅</span>
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">
                  <span className="label-icon">⏰</span>
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                <span className="label-icon">🏠</span>
                Service Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="urgency">
                <span className="label-icon">⚡</span>
                Urgency Level
              </label>
              <div className="urgency-options">
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="low"
                    checked={formData.urgency === 'low'}
                    onChange={handleChange}
                  />
                  <span className="option-label">Low</span>
                  <span className="option-desc">Not urgent</span>
                </label>
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="normal"
                    checked={formData.urgency === 'normal'}
                    onChange={handleChange}
                  />
                  <span className="option-label">Normal</span>
                  <span className="option-desc">Within a week</span>
                </label>
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="high"
                    checked={formData.urgency === 'high'}
                    onChange={handleChange}
                  />
                  <span className="option-label">High</span>
                  <span className="option-desc">Within 24hrs</span>
                </label>
                <label className="urgency-option">
                  <input
                    type="radio"
                    name="urgency"
                    value="emergency"
                    checked={formData.urgency === 'emergency'}
                    onChange={handleChange}
                  />
                  <span className="option-label">Emergency</span>
                  <span className="option-desc">Immediate</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <span className="label-icon">💬</span>
                Your Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows="5"
                required
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span className="checkbox-text">
                  I agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" className="form-submit-btn">
              <span>Send Message</span>
              <span className="btn-icon">→</span>
              <div className="btn-shine"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-header">
            <h2 className="map-title">
              Find Us <span className="title-accent">Here</span>
            </h2>
          </div>
          
          <div className="map-wrapper">
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="map-marker">
                  <span className="marker-icon">📍</span>
                  <span className="marker-text">KaryON HQ</span>
                </div>
                <div className="map-info">
                  <h3>Main Office</h3>
                  <p>123 Service Street, Cityville, ST 12345</p>
                  <p>Open 24/7 - Always here to help</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.9851076845843!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-badge">FAQ</span>
            <h2 className="faq-title">
              Frequently Asked <span className="title-accent">Questions</span>
            </h2>
            <p className="faq-description">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="hours-section">
        <div className="hours-container">
          <div className="hours-content">
            <div className="hours-header">
              <span className="hours-badge">24/7 Availability</span>
              <h2 className="hours-title">
                Business <span className="title-accent">Hours</span>
              </h2>
            </div>

            <div className="hours-grid">
              <div className="hours-card">
                <div className="hours-card-header">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">24 Hours</span>
                </div>
                <div className="hours-progress">
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                </div>
                <p className="hours-note">Full service available</p>
              </div>

              <div className="hours-card">
                <div className="hours-card-header">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">24 Hours</span>
                </div>
                <div className="hours-progress">
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                </div>
                <p className="hours-note">Full service available</p>
              </div>

              <div className="hours-card">
                <div className="hours-card-header">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">24 Hours</span>
                </div>
                <div className="hours-progress">
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                </div>
                <p className="hours-note">Emergency services only</p>
              </div>

              <div className="hours-card emergency">
                <div className="hours-card-header">
                  <span className="hours-day">Emergency</span>
                  <span className="hours-time">24/7</span>
                </div>
                <div className="emergency-contact">
                  <span className="emergency-phone">📞 +1 (234) 567-890</span>
                </div>
                <p className="hours-note">Always available for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      
    </div>
  );
};

export default Contact;