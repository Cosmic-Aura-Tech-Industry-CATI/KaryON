import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      {/* Wave SVG Divider */}
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="rgba(102, 126, 234, 0.1)" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          {/* Main Footer Grid */}
          <div className="footer-grid">
            
            {/* Company Info Section */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <img src="main-logo.png" alt="KaryON Logo" width="170px" height="57px"></img>
              </div>
              <p className="company-description">
                KaryON makes home services simple, secure, and reliable. Connect with verified professionals for all your home service needs.
              </p>
              <div className="social-links">
                <a href="#" className="social-link facebook" aria-label="Facebook">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-link twitter" aria-label="Twitter">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3l18 18M21 3L3 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/"><span className="link-arrow">→</span> Home</a></li>
                <li><a href="/services"><span className="link-arrow">→</span> Services</a></li>
                <li><a href="/howitworks"><span className="link-arrow">→</span> How It Works</a></li>
                <li><a href="/about"><span className="link-arrow">→</span> About Us</a></li>
                <li><a href="/contact"><span className="link-arrow">→</span> Contact</a></li>
                <li><a href="/blog"><span className="link-arrow">→</span> Blog</a></li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="/cleaning"><span className="link-arrow">→</span> Home Cleaning</a></li>
                <li><a href="/plumbing"><span className="link-arrow">→</span> Plumbing</a></li>
                <li><a href="/electrical"><span className="link-arrow">→</span> Electrical</a></li>
                <li><a href="/tutoring"><span className="link-arrow">→</span> Tutoring</a></li>
                <li><a href="/painting"><span className="link-arrow">→</span> Painting</a></li>
                <li><a href="/moving"><span className="link-arrow">→</span> Moving & Shifting</a></li>
                <li><a href="/all" className="view-all">View All Services <span className="view-all-icon">→</span></a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-title">Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a1.999 1.999 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 93057 24440</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>support@karyon.com</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Rooma, Kanpur</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
              <p className="newsletter-text">Get the latest updates on new services and special offers</p>
              <form className="newsletter-form">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="newsletter-input" 
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                    <svg className="btn-icon" viewBox="0 0 24 24">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </button>
                </div>
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  I agree to the <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>
                </label>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="bottom-content">
              <div className="copyright">
                <span className="copyright-symbol">©</span> {currentYear} KaryON. All rights reserved.
              </div>
              
              <div className="bottom-links">
                <a href="/privacy" className="bottom-link">Privacy Policy</a>
                <span className="link-separator">•</span>
                <a href="/terms" className="bottom-link">Terms of Service</a>
                <span className="link-separator">•</span>
                <a href="/sitemap" className="bottom-link">Sitemap</a>
                <span className="link-separator">•</span>
                <a href="/faq" className="bottom-link">FAQ</a>
              </div>

              <div className="payment-methods">
                <span className="payment-label">We Accept:</span>
                <div className="payment-icons">
                  <svg className="payment-icon" viewBox="0 0 24 24">
                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                  <svg className="payment-icon" viewBox="0 0 24 24">
                    <circle cx="7.5" cy="12" r="4.5"/>
                    <circle cx="16.5" cy="12" r="4.5"/>
                  </svg>
                  <svg className="payment-icon" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <line x1="8" y1="10" x2="16" y2="10"/>
                    <line x1="8" y1="14" x2="12" y2="14"/>
                  </svg>
                  <svg className="payment-icon" viewBox="0 0 24 24">
                    <path d="M3 9h18v10H3V9z M6 5h12v4H6V5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg className="top-icon" viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;