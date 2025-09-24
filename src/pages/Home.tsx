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
