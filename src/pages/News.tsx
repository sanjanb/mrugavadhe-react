import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { newsItems } from '../data/templeData';

const News: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple News & Updates</h1>
          <p>Stay updated with the latest temple activities and announcements</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((news) => (
              <article key={news.id} className="card news-card">
                <div className="news-header">
                  <h3>{news.title}</h3>
                  <div className="news-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{news.date}</span>
                    </div>
                    <div className="meta-item">
                      <User size={16} />
                      <span>{news.author}</span>
                    </div>
                  </div>
                </div>
                
                <div className="news-content">
                  <p>{news.content}</p>
                </div>
                
                <div className="news-category">
                  <span className={`category-tag ${news.category.toLowerCase()}`}>
                    {news.category}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <div className="card newsletter-signup">
              <h2>Subscribe to Temple Newsletter</h2>
              <p>
                Stay informed about upcoming festivals, special events, and temple 
                announcements by subscribing to our monthly newsletter.
              </p>
              <div className="newsletter-form">
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="form-input"
                  />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
                <p className="form-note">
                  We respect your privacy and will never share your email address.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card">
              <h2>Quick Updates</h2>
              <div className="quick-updates">
                <div className="update-item">
                  <div className="update-icon">
                    <Clock size={20} />
                  </div>
                  <div className="update-content">
                    <h4>Extended Darshan Hours</h4>
                    <p>During festival season, temple will remain open until 9:00 PM</p>
                    <span className="update-date">Valid from March 1st</span>
                  </div>
                </div>
                <div className="update-item">
                  <div className="update-icon">
                    <Calendar size={20} />
                  </div>
                  <div className="update-content">
                    <h4>Special Abhishek</h4>
                    <p>Monthly Maha Rudrabhishek on every Amavasya at 6:00 AM</p>
                    <span className="update-date">Ongoing program</span>
                  </div>
                </div>
                <div className="update-item">
                  <div className="update-icon">
                    <User size={20} />
                  </div>
                  <div className="update-content">
                    <h4>Volunteer Program</h4>
                    <p>Join our seva activities and contribute to temple services</p>
                    <span className="update-date">Applications open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;