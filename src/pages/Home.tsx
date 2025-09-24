import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Clock,
  Heart,
  Camera,
  Book,
  Users,
} from "lucide-react";
import {
  templeInfo,
  festivals,
  newsItems,
  templeImages,
} from "../data/templeData";

const Home: React.FC = () => {
  const upcomingFestival = festivals[0];
  const latestNews = newsItems.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{templeInfo.name}</h1>
          <p className="hero-subtitle">{templeInfo.englishName}</p>
          <p className="hero-description">
            A sacred place where Lord Rama installed the Shivalinga after
            slaying demon Maricha. Experience divine blessings at this ancient
            temple on the banks of river Tunga.
          </p>
          <div className="hero-actions">
            <Link to="/pooja" className="btn btn-primary">
              <Calendar size={20} />
              Book Pooja
            </Link>
            <Link to="/about/history" className="btn btn-secondary">
              <Book size={20} />
              Learn History
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="section">
        <div className="container">
          <div className="quick-info-cards">
            <div className="info-card">
              <Clock className="info-icon" />
              <h3>Darshan Timings</h3>
              <p>Morning: 6:00 AM - 12:00 PM</p>
              <p>Evening: 4:00 PM - 8:00 PM</p>
            </div>
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Location</h3>
              <p>
                {templeInfo.location}, {templeInfo.district}
              </p>
              <p>
                {templeInfo.state} - {templeInfo.pincode}
              </p>
            </div>
            <div className="info-card">
              <Heart className="info-icon" />
              <h3>Special Feature</h3>
              <p>{templeInfo.specialFeature}</p>
              <p>On banks of {templeInfo.river} River</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="about-preview">
            <div className="about-content">
              <h2>Sacred History</h2>
              <p>
                {templeInfo.historicalSignificance} The temple, originally named
                {templeInfo.originalName}, stands as a testament to divine
                intervention and spiritual significance.
              </p>
              <p>
                Located on the serene banks of the Tunga river, this ancient
                temple continues to attract devotees from across the region,
                offering them peace, prosperity, and spiritual fulfillment.
              </p>
              <Link to="/about/history" className="btn btn-primary">
                Read Complete History
              </Link>
            </div>
            <div className="about-image">
              <img
                src={templeImages.general[0]}
                alt="Temple View"
                className="featured-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Festival */}
      <section className="section festival-preview">
        <div className="container">
          <h2 className="section-title">Upcoming Festival</h2>
          <div className="festival-card">
            <div className="festival-image">
              <img src={upcomingFestival.image} alt={upcomingFestival.name} />
            </div>
            <div className="festival-details">
              <h3>{upcomingFestival.name}</h3>
              <p className="festival-date">
                <Calendar size={16} />
                {upcomingFestival.date}
              </p>
              <p>{upcomingFestival.description}</p>
              <div className="festival-events">
                <h4>Special Events:</h4>
                <ul>
                  {upcomingFestival.specialEvents
                    .slice(0, 3)
                    .map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                </ul>
              </div>
              <Link to="/festivals" className="btn btn-primary">
                View All Festivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <h2 className="section-title">Temple Services</h2>
          <div className="services-grid">
            <Link to="/pooja" className="service-card">
              <div className="service-icon">
                <Calendar size={32} />
              </div>
              <h3>Pooja & Seva</h3>
              <p>
                Book various poojas and sevas online. Experience divine
                blessings through sacred rituals.
              </p>
            </Link>
            <Link to="/gallery" className="service-card">
              <div className="service-icon">
                <Camera size={32} />
              </div>
              <h3>Photo Gallery</h3>
              <p>
                Explore beautiful images of the temple, festivals, and spiritual
                celebrations.
              </p>
            </Link>
            <Link to="/visitor-info" className="service-card">
              <div className="service-icon">
                <MapPin size={32} />
              </div>
              <h3>Visitor Information</h3>
              <p>
                Complete guide for visiting the temple, including timings,
                rules, and accommodation.
              </p>
            </Link>
            <Link to="/donate" className="service-card">
              <div className="service-icon">
                <Heart size={32} />
              </div>
              <h3>Donations</h3>
              <p>
                Contribute to temple activities and help maintain this sacred
                place of worship.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section news-preview">
        <div className="container">
          <h2 className="section-title">Latest Updates</h2>
          <div className="news-grid">
            {latestNews.map((item) => (
              <article key={item.id} className="news-card">
                {item.image && (
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span className="news-date">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/news" className="btn btn-secondary">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Divine Blessings</h2>
            <p>
              Visit the sacred Mallikarjuna Temple and immerse yourself in the
              spiritual atmosphere where Lord Rama once stood. Join thousands of
              devotees in experiencing peace, prosperity, and divine grace.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <MapPin size={20} />
                Plan Your Visit
              </Link>
              <Link to="/volunteer" className="btn btn-secondary">
                <Users size={20} />
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
            url("${templeImages.general[0]}");
          background-size: cover;
          background-position: center;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-actions .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quick-info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: -4rem;
          position: relative;
          z-index: 10;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-icon {
          color: var(--primary-orange);
          margin-bottom: 1rem;
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
        }

        .info-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .about-preview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .featured-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        .festival-preview {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .festival-card {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 3rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .festival-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .festival-details {
          padding: 2rem;
        }

        .festival-details h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .festival-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .festival-events ul {
          list-style: none;
          padding: 0;
        }

        .festival-events li {
          padding: 0.25rem 0;
          opacity: 0.9;
        }

        .festival-events li::before {
          content: "•";
          color: #ffeb3b;
          font-weight: bold;
          margin-right: 0.5rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          color: inherit;
        }

        .service-icon {
          color: var(--primary-orange);
          margin-bottom: 1rem;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .news-preview {
          background: var(--background-light);
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .news-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-5px);
        }

        .news-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-content {
          padding: 1.5rem;
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .news-category {
          background: var(--primary-orange);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .news-date {
          color: var(--text-light);
        }

        .news-card h3 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .read-more {
          color: var(--primary-orange);
          text-decoration: none;
          font-weight: 500;
        }

        .cta-section {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-actions .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .about-preview,
          .festival-card {
            grid-template-columns: 1fr;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
    </div>
  );
};

export default Home;
