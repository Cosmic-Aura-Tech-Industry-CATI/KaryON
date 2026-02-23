import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (loginMethod === 'email') {
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Please enter a valid email';
      }
      
      if (!formData.password) {
        errors.password = 'Password is required';
      }
    } else if (loginMethod === 'phone') {
      if (!formData.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        errors.phone = 'Please enter a valid 10-digit number';
      }
      
      if (otpSent) {
        const otpValue = otp.join('');
        if (otpValue.length !== 6) {
          errors.otp = 'Please enter complete OTP';
        }
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        if (loginMethod === 'email') {
          alert('Login successful! Welcome back.');
        } else if (loginMethod === 'phone' && !otpSent) {
          setOtpSent(true);
          alert('OTP sent to your phone!');
        } else if (loginMethod === 'phone' && otpSent) {
          alert('Login successful with OTP!');
        }
      }, 1500);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Logging in with Google...');
    }, 1500);
  };

  const resendOtp = () => {
    alert('OTP resent successfully!');
  };

  const resetPhoneLogin = () => {
    setOtpSent(false);
    setOtp(['', '', '', '', '', '']);
    setFormErrors({});
  };

  return (
    <div className="login-page">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="login-hero-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`login-particle particle-${i + 1}`}></div>
          ))}
        </div>
        
        <div className="login-hero-content">
          <h1 className="login-hero-title">
            Welcome <span className="hero-highlight">Back</span>
          </h1>
          <p className="login-hero-description">
            Sign in to access your account and manage your services
          </p>
        </div>
        
        <div className="login-hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Login Section */}
      <section className="login-section">
        <div className="login-container">
          <div className="login-card">
            {/* Login Methods Tabs - Email & Phone only */}
            <div className="login-methods">
              <button
                className={`method-btn ${loginMethod === 'email' ? 'active' : ''}`}
                onClick={() => {
                  setLoginMethod('email');
                  resetPhoneLogin();
                }}
              >
                <span className="method-icon">📧</span>
                <span className="method-text">Email</span>
              </button>
              <button
                className={`method-btn ${loginMethod === 'phone' ? 'active' : ''}`}
                onClick={() => {
                  setLoginMethod('phone');
                  resetPhoneLogin();
                }}
              >
                <span className="method-icon">📱</span>
                <span className="method-text">Phone</span>
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Login */}
              {loginMethod === 'email' && (
                <div className="form-fade">
                  <div className="form-group">
                    <label htmlFor="email">
                      <span className="label-icon">📧</span>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`form-input ${formErrors.email ? 'error' : ''}`}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <span className="label-icon">🔒</span>
                      Password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className={`form-input ${formErrors.password ? 'error' : ''}`}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                    {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                  </div>

                  <div className="form-options">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <span className="checkbox-text">Remember me</span>
                    </label>
                    <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
                  </div>
                </div>
              )}

              {/* Phone Login */}
              {loginMethod === 'phone' && (
                <div className="form-fade">
                  {!otpSent ? (
                    <>
                      <div className="form-group">
                        <label htmlFor="phone">
                          <span className="label-icon">📱</span>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          className={`form-input ${formErrors.phone ? 'error' : ''}`}
                        />
                        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                      </div>
                      
                      <div className="phone-note">
                        <span className="note-icon">ℹ️</span>
                        <span>We'll send a 6-digit OTP for verification</span>
                      </div>
                    </>
                  ) : (
                    <div className="otp-verification">
                      <button 
                        type="button" 
                        className="back-to-phone"
                        onClick={resetPhoneLogin}
                      >
                        ← Edit Phone Number
                      </button>
                      
                      <p className="otp-message">
                        Enter the 6-digit OTP sent to <strong>{formData.phone}</strong>
                      </p>
                      
                      <div className="otp-inputs">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className={`otp-input ${formErrors.otp ? 'error' : ''}`}
                          />
                        ))}
                      </div>
                      {formErrors.otp && <span className="error-message">{formErrors.otp}</span>}
                      
                      <button type="button" className="resend-otp" onClick={resendOtp}>
                        Resend OTP
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className={`login-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    <span>
                      {loginMethod === 'phone' && otpSent ? 'Verify OTP' : 'Login'}
                    </span>
                    <span className="btn-icon">→</span>
                  </>
                )}
                <div className="btn-shine"></div>
              </button>

              {/* Google Login - Only One Option */}
              <div className="google-login">
                <p className="google-divider">
                  <span>Or continue with</span>
                </p>
                
                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <span className="google-icon">G</span>
                  <span>Continue with Google</span>
                  <div className="google-shine"></div>
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <div className="signup-link">
              <p>
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="login-features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Why Choose <span className="title-accent">KaryON</span>
            </h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🔒</span>
                <div className="feature-glow"></div>
              </div>
              <h3 className="feature-title">Secure Login</h3>
              <p className="feature-description">Your data is protected with 256-bit encryption</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">⚡</span>
                <div className="feature-glow"></div>
              </div>
              <h3 className="feature-title">Quick Access</h3>
              <p className="feature-description">Login with email or phone OTP in seconds</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🛡️</span>
                <div className="feature-glow"></div>
              </div>
              <h3 className="feature-title">Safe & Secure</h3>
              <p className="feature-description">Two-factor authentication available</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">📱</span>
                <div className="feature-glow"></div>
              </div>
              <h3 className="feature-title">Mobile Friendly</h3>
              <p className="feature-description">Seamless experience on all devices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;