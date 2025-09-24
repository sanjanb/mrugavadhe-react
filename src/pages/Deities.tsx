import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { deities } from '../data/templeData';

const Deities: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Deities</h1>
          <p>Discover the sacred deities and their divine significance in our temple</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            {deities.map((deity) => (
              <Link 
                key={deity.id} 
                to={`/deities/${deity.id}`} 
                className="card deity-card"
              >
                <div className="deity-image">
                  <img src={deity.image} alt={deity.name} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="deity-name">{deity.name}</h3>
                  <p className="deity-description">{deity.description}</p>
                  
                  <div className="deity-info">
                    <div className="deity-meta">
                      <Clock size={16} />
                      <span>{deity.timings}</span>
                    </div>
                    <div className="deity-meta">
                      <Star size={16} />
                      <span>Special Significance</span>
                    </div>
                  </div>

                  <div className="deity-offerings">
                    <h4>Popular Offerings:</h4>
                    <div className="offerings-list">
                      {deity.offerings.slice(0, 3).map((offering, index) => (
                        <span key={index} className="offering-tag">{offering}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <div className="card info-card">
              <h2>Darshan & Worship</h2>
              <div className="grid grid-2">
                <div>
                  <h3>Temple Timings</h3>
                  <p><strong>Morning Darshan:</strong> 6:00 AM - 12:00 PM</p>
                  <p><strong>Evening Darshan:</strong> 4:00 PM - 8:00 PM</p>
                  <p><strong>Special Days:</strong> Extended hours during festivals</p>
                </div>
                <div>
                  <h3>Worship Guidelines</h3>
                  <p>• Maintain silence and reverence in the sanctum</p>
                  <p>• Remove footwear before entering temple premises</p>
                  <p>• Photography is restricted in certain areas</p>
                  <p>• Follow traditional dress code when possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .deity-card {
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease;
        }

        .deity-card:hover {
          transform: translateY(-5px);
          color: inherit;
        }

        .deity-image {
          height: 250px;
          overflow: hidden;
        }

        .deity-name {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-orange);
        }

        .deity-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .deity-info {
          margin-bottom: 1.5rem;
        }

        .deity-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        .deity-offerings h4 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
          font-size: 1rem;
        }

        .offerings-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .offering-tag {
          background: var(--background-light);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          color: var(--text-dark);
          border: 1px solid var(--border-color);
        }

        .info-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .info-card h2,
        .info-card h3 {
          color: white;
        }

        .info-card p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Deities;