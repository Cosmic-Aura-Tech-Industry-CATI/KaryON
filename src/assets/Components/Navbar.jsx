import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be managed by your auth system
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLinkActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-logo">
          <a href="/">
            <img src="logoKaryONfull.png" alt="KaryON Logo" width="150px" height="55px"></img>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className={`nav-link ${isLinkActive('/') ? 'active' : ''}`}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/services" className={`nav-link ${isLinkActive('/services') ? 'active' : ''}`}>Services</a>
          </li>
          <li className="nav-item">
            <a href="/about" className={`nav-link ${isLinkActive('/about') ? 'active' : ''}`}>About</a>
          </li>
          <li className="nav-item">
            <a href="/bookings" className={`nav-link ${isLinkActive('/bookings') ? 'active' : ''}`}>My Bookings</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className={`nav-link ${isLinkActive('/contact') ? 'active' : ''}`}>Contact</a>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="navbar-actions">
          {isLoggedIn ? (
            <div className="user-menu">
              <button className="user-menu-btn">
                <span className="user-avatar">SS</span>
                <span className="user-name">Siddhant</span>
              </button>
              <div className="user-dropdown">
                <a href="/profile" className="dropdown-item">My Profile</a>
                <a href="/settings" className="dropdown-item">Settings</a>
                <hr className="dropdown-divider" />
                <a href="/logout" className="dropdown-item logout">Logout</a>
              </div>
            </div>
          ) : (
            <div className="auth-buttons">
              <a href="/login" className="btn btn-outline">Login</a>
              <a href="/signup" className="btn btn-primary">Sign Up</a>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;