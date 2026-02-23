import React, { useState, useEffect } from 'react';
import './Mybooking.css';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [rating, setRating] = useState({});
  const [review, setReview] = useState({});
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBookingForReview, setSelectedBookingForReview] = useState(null);
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [expandedBooking, setExpandedBooking] = useState(null);

  // Sample booking data
  const sampleBookings = [
    {
      id: 'BKG001',
      serviceName: 'Home Cleaning',
      serviceIcon: '🧹',
      professionalName: 'Rajesh Kumar',
      professionalImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: '2026-03-15',
      time: '10:00 AM',
      status: 'confirmed',
      price: 2499,
      address: '123, Green Park Extension, New Delhi',
      duration: '3 hours',
      paymentMethod: 'Credit Card',
      paymentStatus: 'paid',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43210',
      professionalEmail: 'rajesh.k@example.com',
      specialInstructions: 'Please bring eco-friendly cleaning products',
      totalAmount: 2499,
      discount: 0,
      tax: 200,
      finalAmount: 2699
    },
    {
      id: 'BKG002',
      serviceName: 'Plumbing Service',
      serviceIcon: '🔧',
      professionalName: 'Amit Singh',
      professionalImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      date: '2026-03-10',
      time: '2:00 PM',
      status: 'completed',
      price: 1799,
      address: '456, Sector 62, Noida',
      duration: '2 hours',
      paymentMethod: 'UPI',
      paymentStatus: 'paid',
      rating: 5,
      review: 'Excellent work! Fixed the leakage quickly.',
      professionalPhone: '+91 98765 43211',
      professionalEmail: 'amit.s@example.com',
      specialInstructions: 'Main line leakage',
      totalAmount: 1799,
      discount: 100,
      tax: 150,
      finalAmount: 1849
    },
    {
      id: 'BKG003',
      serviceName: 'Electrical Repair',
      serviceIcon: '⚡',
      professionalName: 'Suresh Patel',
      professionalImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      date: '2026-03-20',
      time: '11:30 AM',
      status: 'pending',
      price: 1499,
      address: '789, Indiranagar, Bangalore',
      duration: '1.5 hours',
      paymentMethod: 'Cash',
      paymentStatus: 'pending',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43212',
      professionalEmail: 'suresh.p@example.com',
      specialInstructions: 'Fan repair and wiring check',
      totalAmount: 1499,
      discount: 0,
      tax: 120,
      finalAmount: 1619
    },
    {
      id: 'BKG004',
      serviceName: 'Tutoring - Mathematics',
      serviceIcon: '📚',
      professionalName: 'Priya Sharma',
      professionalImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      date: '2026-03-18',
      time: '4:00 PM',
      status: 'confirmed',
      price: 3999,
      address: '321, Model Town, Delhi',
      duration: '5 sessions',
      paymentMethod: 'Credit Card',
      paymentStatus: 'paid',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43213',
      professionalEmail: 'priya.s@example.com',
      specialInstructions: 'Class 10 Mathematics',
      totalAmount: 3999,
      discount: 200,
      tax: 300,
      finalAmount: 4099
    },
    {
      id: 'BKG005',
      serviceName: 'Painting Service',
      serviceIcon: '🎨',
      professionalName: 'Vikram Mehta',
      professionalImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      date: '2026-02-28',
      time: '9:00 AM',
      status: 'cancelled',
      price: 8999,
      address: '567, Koregaon Park, Pune',
      duration: '3 days',
      paymentMethod: 'Credit Card',
      paymentStatus: 'refunded',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43214',
      professionalEmail: 'vikram.m@example.com',
      specialInstructions: 'Cancel due to schedule conflict',
      totalAmount: 8999,
      discount: 500,
      tax: 720,
      finalAmount: 9219
    },
    {
      id: 'BKG006',
      serviceName: 'Pest Control',
      serviceIcon: '🦟',
      professionalName: 'Anil Joshi',
      professionalImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      date: '2026-03-05',
      time: '8:00 AM',
      status: 'completed',
      price: 3499,
      address: '890, Banjara Hills, Hyderabad',
      duration: '2 hours',
      paymentMethod: 'UPI',
      paymentStatus: 'paid',
      rating: 4,
      review: 'Good service, but could be more thorough.',
      professionalPhone: '+91 98765 43215',
      professionalEmail: 'anil.j@example.com',
      specialInstructions: 'Cockroach treatment',
      totalAmount: 3499,
      discount: 0,
      tax: 280,
      finalAmount: 3779
    },
    {
      id: 'BKG007',
      serviceName: 'Carpentry Work',
      serviceIcon: '🪚',
      professionalName: 'Mohan Das',
      professionalImage: 'https://randomuser.me/api/portraits/men/6.jpg',
      date: '2026-03-22',
      time: '1:00 PM',
      status: 'pending',
      price: 5999,
      address: '123, Anna Nagar, Chennai',
      duration: '4 hours',
      paymentMethod: 'Cash',
      paymentStatus: 'pending',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43216',
      professionalEmail: 'mohan.d@example.com',
      specialInstructions: 'Custom bookshelf',
      totalAmount: 5999,
      discount: 300,
      tax: 450,
      finalAmount: 6149
    },
    {
      id: 'BKG008',
      serviceName: 'Moving & Shifting',
      serviceIcon: '🚛',
      professionalName: 'Ravi Verma',
      professionalImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      date: '2026-03-25',
      time: '7:00 AM',
      status: 'confirmed',
      price: 12999,
      address: '456, Salt Lake City, Kolkata',
      duration: '6 hours',
      paymentMethod: 'Credit Card',
      paymentStatus: 'paid',
      rating: null,
      review: null,
      professionalPhone: '+91 98765 43217',
      professionalEmail: 'ravi.v@example.com',
      specialInstructions: 'Fragile items, need careful handling',
      totalAmount: 12999,
      discount: 1000,
      tax: 1000,
      finalAmount: 12999
    }
  ];

  useEffect(() => {
    // Simulate fetching bookings from API
    setBookings(sampleBookings);
    setFilteredBookings(sampleBookings);
  }, []);

  useEffect(() => {
    filterAndSortBookings();
  }, [activeTab, searchTerm, dateFilter, sortBy, bookings]);

  const filterAndSortBookings = () => {
    let filtered = [...bookings];

    // Filter by status tab
    if (activeTab !== 'all') {
      filtered = filtered.filter(booking => booking.status === activeTab);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(booking => 
        booking.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.professionalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by date
    const today = new Date();
    const filterDate = new Date();
    
    switch(dateFilter) {
      case 'today':
        filtered = filtered.filter(booking => {
          const bookingDate = new Date(booking.date);
          return bookingDate.toDateString() === today.toDateString();
        });
        break;
      case 'week':
        const weekAgo = new Date(today.setDate(today.getDate() - 7));
        filtered = filtered.filter(booking => new Date(booking.date) >= weekAgo);
        break;
      case 'month':
        const monthAgo = new Date(today.setMonth(today.getMonth() - 1));
        filtered = filtered.filter(booking => new Date(booking.date) >= monthAgo);
        break;
      default:
        break;
    }

    // Sort bookings
    switch(sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredBookings(filtered);
  };

  const handleCancelBooking = (bookingId) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === bookingId 
        ? { ...booking, status: 'cancelled', cancelReason: cancelReason }
        : booking
    );
    setBookings(updatedBookings);
    setShowCancelModal(false);
    setCancelReason('');
  };

  const handleReschedule = (bookingId) => {
    // Implement reschedule logic
    console.log('Reschedule booking:', bookingId);
  };

  const handleContactProfessional = (professional) => {
    // Implement contact logic
    console.log('Contact professional:', professional);
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleAddReview = (booking) => {
    setSelectedBookingForReview(booking);
    setShowReviewModal(true);
  };

  const submitReview = () => {
    const updatedBookings = bookings.map(booking =>
      booking.id === selectedBookingForReview.id
        ? { 
            ...booking, 
            rating: rating[selectedBookingForReview.id] || 5,
            review: review[selectedBookingForReview.id] || ''
          }
        : booking
    );
    setBookings(updatedBookings);
    setShowReviewModal(false);
    setSelectedBookingForReview(null);
  };

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'confirmed':
        return 'status-badge confirmed';
      case 'pending':
        return 'status-badge pending';
      case 'completed':
        return 'status-badge completed';
      case 'cancelled':
        return 'status-badge cancelled';
      default:
        return 'status-badge';
    }
  };

  const getPaymentStatusBadge = (status) => {
    switch(status) {
      case 'paid':
        return 'payment-badge paid';
      case 'pending':
        return 'payment-badge pending';
      case 'refunded':
        return 'payment-badge refunded';
      default:
        return 'payment-badge';
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateStats = () => {
    const total = bookings.length;
    const completed = bookings.filter(b => b.status === 'completed').length;
    const upcoming = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending').length;
    const totalSpent = bookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.finalAmount, 0);
    
    return { total, completed, upcoming, totalSpent };
  };

  const stats = calculateStats();

  return (
    <div className="my-booking">
      {/* Header Section */}
      <div className="booking-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1 className="header-title">
            My <span className="header-highlight">Bookings</span>
          </h1>
          <p className="header-subtitle">
            Manage and track all your service bookings in one place
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card animate-on-scroll">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.total}</h3>
              <p className="stat-label">Total Bookings</p>
            </div>
          </div>
          <div className="stat-card animate-on-scroll">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.completed}</h3>
              <p className="stat-label">Completed</p>
            </div>
          </div>
          <div className="stat-card animate-on-scroll">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <h3 className="stat-value">{stats.upcoming}</h3>
              <p className="stat-label">Upcoming</p>
            </div>
          </div>
          <div className="stat-card animate-on-scroll">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3 className="stat-value">₹{stats.totalSpent.toLocaleString()}</h3>
              <p className="stat-label">Total Spent</p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-container">
        {/* Filters and Search */}
        <div className="filters-section">
          <div className="search-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search by service, professional, or booking ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <select 
              className="filter-select"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>

            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="booking-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Bookings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'confirmed' ? 'active' : ''}`}
            onClick={() => setActiveTab('confirmed')}
          >
            Confirmed
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending
          </button>
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveTab('cancelled')}
          >
            Cancelled
          </button>
        </div>

        {/* Bookings List */}
        <div className="bookings-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <div 
                key={booking.id} 
                className={`booking-card ${expandedBooking === booking.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="booking-card-header">
                  <div className="booking-id">
                    <span className="id-label">Booking ID:</span>
                    <span className="id-value">{booking.id}</span>
                  </div>
                  <div className="booking-actions">
                    {booking.status === 'pending' && (
                      <>
                        <button 
                          className="action-btn cancel"
                          onClick={() => {
                            setSelectedBooking(booking);
                            setShowCancelModal(true);
                          }}
                        >
                          Cancel
                        </button>
                        <button 
                          className="action-btn reschedule"
                          onClick={() => handleReschedule(booking.id)}
                        >
                          Reschedule
                        </button>
                      </>
                    )}
                    {booking.status === 'confirmed' && (
                      <button 
                        className="action-btn contact"
                        onClick={() => handleContactProfessional(booking.professionalName)}
                      >
                        Contact
                      </button>
                    )}
                    {booking.status === 'completed' && !booking.rating && (
                      <button 
                        className="action-btn review"
                        onClick={() => handleAddReview(booking)}
                      >
                        Add Review
                      </button>
                    )}
                    <button 
                      className="action-btn details"
                      onClick={() => handleViewDetails(booking)}
                    >
                      Details
                    </button>
                    <button 
                      className="expand-btn"
                      onClick={() => setExpandedBooking(expandedBooking === booking.id ? null : booking.id)}
                    >
                      <svg className={`expand-icon ${expandedBooking === booking.id ? 'rotated' : ''}`} viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="booking-card-body">
                  <div className="service-info">
                    <div className="service-icon-wrapper">
                      <span className="service-icon">{booking.serviceIcon}</span>
                    </div>
                    <div className="service-details">
                      <h3 className="service-name">{booking.serviceName}</h3>
                      <div className="professional-info">
                        <img src={booking.professionalImage} alt={booking.professionalName} className="professional-image" />
                        <span className="professional-name">{booking.professionalName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="booking-meta">
                    <div className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M8 7V3M16 7V3M3 11H21M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"/>
                      </svg>
                      <span>{formatDate(booking.date)}</span>
                    </div>
                    <div className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{booking.time}</span>
                    </div>
                    <div className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      <span>{booking.address.substring(0, 30)}...</span>
                    </div>
                    <div className="meta-item">
                      <svg className="meta-icon" viewBox="0 0 24 24">
                        <path d="M12 2v20M2 12h20"/>
                      </svg>
                      <span>₹{booking.finalAmount}</span>
                    </div>
                  </div>

                  <div className="booking-status">
                    <span className={getStatusBadgeClass(booking.status)}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    <span className={getPaymentStatusBadge(booking.paymentStatus)}>
                      {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                    </span>
                  </div>
                </div>

                {expandedBooking === booking.id && (
                  <div className="booking-card-expanded">
                    <div className="expanded-section">
                      <h4>Booking Details</h4>
                      <div className="details-grid">
                        <div className="detail-item">
                          <span className="detail-label">Duration:</span>
                          <span className="detail-value">{booking.duration}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Payment Method:</span>
                          <span className="detail-value">{booking.paymentMethod}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Special Instructions:</span>
                          <span className="detail-value">{booking.specialInstructions}</span>
                        </div>
                      </div>
                    </div>

                    {booking.rating && (
                      <div className="expanded-section">
                        <h4>Your Review</h4>
                        <div className="review-display">
                          <div className="rating-stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`star ${i < booking.rating ? 'filled' : ''}`}>★</span>
                            ))}
                          </div>
                          <p className="review-text">"{booking.review}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-bookings">
              <div className="no-bookings-icon">📭</div>
              <h3>No bookings found</h3>
              <p>Try adjusting your filters or book a new service</p>
              <button className="book-now-btn">Book a Service</button>
            </div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedBooking && (
        <div className="modal-overlay" onClick={() => setShowDetailsModal(false)}>
          <div className="modal-content booking-details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetailsModal(false)}>×</button>
            
            <div className="modal-header">
              <h2>Booking Details</h2>
              <span className={getStatusBadgeClass(selectedBooking.status)}>
                {selectedBooking.status}
              </span>
            </div>

            <div className="modal-body">
              <div className="details-section">
                <h3>Service Information</h3>
                <div className="details-row">
                  <span className="details-label">Booking ID:</span>
                  <span className="details-value">{selectedBooking.id}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Service:</span>
                  <span className="details-value">{selectedBooking.serviceName}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Professional:</span>
                  <span className="details-value">{selectedBooking.professionalName}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Date & Time:</span>
                  <span className="details-value">{formatDate(selectedBooking.date)} at {selectedBooking.time}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Duration:</span>
                  <span className="details-value">{selectedBooking.duration}</span>
                </div>
              </div>

              <div className="details-section">
                <h3>Location</h3>
                <div className="details-row">
                  <span className="details-label">Address:</span>
                  <span className="details-value">{selectedBooking.address}</span>
                </div>
              </div>

              <div className="details-section">
                <h3>Payment Details</h3>
                <div className="details-row">
                  <span className="details-label">Subtotal:</span>
                  <span className="details-value">₹{selectedBooking.totalAmount}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Discount:</span>
                  <span className="details-value">-₹{selectedBooking.discount}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Tax:</span>
                  <span className="details-value">+₹{selectedBooking.tax}</span>
                </div>
                <div className="details-row total">
                  <span className="details-label">Total Amount:</span>
                  <span className="details-value">₹{selectedBooking.finalAmount}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Payment Method:</span>
                  <span className="details-value">{selectedBooking.paymentMethod}</span>
                </div>
                <div className="details-row">
                  <span className="details-label">Payment Status:</span>
                  <span className={getPaymentStatusBadge(selectedBooking.paymentStatus)}>
                    {selectedBooking.paymentStatus}
                  </span>
                </div>
              </div>

              {selectedBooking.specialInstructions && (
                <div className="details-section">
                  <h3>Special Instructions</h3>
                  <p className="instructions-text">{selectedBooking.specialInstructions}</p>
                </div>
              )}

              {selectedBooking.rating && (
                <div className="details-section">
                  <h3>Your Review</h3>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < selectedBooking.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                  <p className="review-text">{selectedBooking.review}</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="modal-btn primary" onClick={() => window.print()}>
                Download Invoice
              </button>
              <button className="modal-btn secondary" onClick={() => setShowDetailsModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && selectedBooking && (
        <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
          <div className="modal-content cancel-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCancelModal(false)}>×</button>
            
            <div className="modal-header">
              <h2>Cancel Booking</h2>
            </div>

            <div className="modal-body">
              <p className="cancel-warning">
                Are you sure you want to cancel this booking? This action cannot be undone.
              </p>
              
              <div className="form-group">
                <label htmlFor="cancelReason">Reason for cancellation (optional)</label>
                <textarea
                  id="cancelReason"
                  rows="4"
                  placeholder="Please tell us why you're cancelling..."
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                ></textarea>
              </div>

              <div className="booking-summary">
                <h4>Booking Summary</h4>
                <div className="summary-item">
                  <span>Service:</span>
                  <span>{selectedBooking.serviceName}</span>
                </div>
                <div className="summary-item">
                  <span>Date:</span>
                  <span>{formatDate(selectedBooking.date)}</span>
                </div>
                <div className="summary-item">
                  <span>Amount:</span>
                  <span>₹{selectedBooking.finalAmount}</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="modal-btn cancel-btn"
                onClick={() => handleCancelBooking(selectedBooking.id)}
              >
                Confirm Cancellation
              </button>
              <button 
                className="modal-btn secondary"
                onClick={() => setShowCancelModal(false)}
              >
                Keep Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && selectedBookingForReview && (
        <div className="modal-overlay" onClick={() => setShowReviewModal(false)}>
          <div className="modal-content review-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowReviewModal(false)}>×</button>
            
            <div className="modal-header">
              <h2>Rate Your Experience</h2>
            </div>

            <div className="modal-body">
              <div className="professional-info">
                <img src={selectedBookingForReview.professionalImage} alt={selectedBookingForReview.professionalName} />
                <div>
                  <h3>{selectedBookingForReview.professionalName}</h3>
                  <p>{selectedBookingForReview.serviceName}</p>
                </div>
              </div>

              <div className="rating-input">
                <label>Your Rating</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${(rating[selectedBookingForReview.id] || 0) >= star ? 'filled' : ''}`}
                      onClick={() => setRating({ ...rating, [selectedBookingForReview.id]: star })}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="review">Write your review</label>
                <textarea
                  id="review"
                  rows="5"
                  placeholder="Share your experience with this professional..."
                  value={review[selectedBookingForReview.id] || ''}
                  onChange={(e) => setReview({ ...review, [selectedBookingForReview.id]: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn primary" onClick={submitReview}>
                Submit Review
              </button>
              <button className="modal-btn secondary" onClick={() => setShowReviewModal(false)}>
                Skip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooking;