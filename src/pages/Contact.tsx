import React from "react";
import { MapPin, Phone, Mail, Clock, User, Send } from "lucide-react";
import { templeInfo } from "../data/templeData";

const Contact: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries, bookings, or information</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <div className="card contact-info">
                <h3>Temple Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <MapPin size={24} />
                    <div>
                      <h4>{templeInfo.englishName}</h4>
                      <p>
                        {templeInfo.location}
                        <br />
                        {templeInfo.district} District
                        <br />
                        {templeInfo.state}, India
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone size={24} />
                    <div>
                      <h4>Phone Numbers</h4>
                      <p>
                        Temple Office: +91 8183-234567
                        <br />
                        Priest: +91 9876-543210
                        <br />
                        Emergency: +91 8183-100
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Mail size={24} />
                    <div>
                      <h4>Email Addresses</h4>
                      <p>
                        General: info@mallikarjunatemple.org
                        <br />
                        Bookings: bookings@mallikarjunatemple.org
                        <br />
                        Donations: donations@mallikarjunatemple.org
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Clock size={24} />
                    <div>
                      <h4>Office Hours</h4>
                      <p>
                        Monday - Sunday: 9:00 AM - 6:00 PM
                        <br />
                        Festival Days: Extended hours
                        <br />
                        Lunch Break: 1:00 PM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-3">
                <h3>Key Personnel</h3>
                <div className="personnel-list">
                  <div className="person-card">
                    <User size={32} />
                    <div>
                      <h4>Temple Administrator</h4>
                      <p>Shri Rajesh Kumar</p>
                      <p>+91 8183-234567</p>
                    </div>
                  </div>
                  <div className="person-card">
                    <User size={32} />
                    <div>
                      <h4>Head Priest</h4>
                      <p>Shri Ganapati Bhat</p>
                      <p>+91 9876-543210</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card contact-form">
                <h3>Send Us a Message</h3>
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select id="subject" className="form-input" required>
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="pooja">Pooja Booking</option>
                      <option value="donation">Donation Query</option>
                      <option value="visit">Visit Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary full-width">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card map-section">
              <h3>Location Map</h3>
              <div className="map-container">
                <div className="map-placeholder">
                  <MapPin size={64} />
                  <h4>Mallikarjuna Temple</h4>
                  <p>
                    {templeInfo.location}, {templeInfo.district}
                  </p>
                  <p>Interactive map integration coming soon</p>
                  <button className="btn btn-secondary">Get Directions</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card faq-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>What are the temple visiting hours?</h4>
                  <p>
                    The temple is open from 6:00 AM to 12:00 PM and 4:00 PM to
                    8:00 PM daily.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>How can I book special poojas?</h4>
                  <p>
                    You can book poojas by calling our office at +91 8183-234567
                    or through our online booking system.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Is there parking available?</h4>
                  <p>
                    Yes, free parking is available for devotees near the temple
                    premises.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Are there any accommodation facilities?</h4>
                  <p>
                    Basic guest house facilities are available. Please contact
                    the temple office for bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
