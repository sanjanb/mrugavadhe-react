import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Star } from 'lucide-react';
import { deities } from '../data/templeData';

const DeityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const deity = deities.find(d => d.id === id);

  if (!deity) {
    return (
      <div className="page">
        <div className="container">
          <div className="card text-center">
            <h2>Deity Not Found</h2>
            <p>The requested deity information could not be found.</p>
            <Link to="/deities" className="btn btn-primary">
              Back to Deities
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <Link to="/deities" className="btn btn-secondary mb-2">
            <ArrowLeft size={18} />
            Back to Deities
          </Link>
          <h1>{deity.name}</h1>
          <p>Divine presence and sacred significance</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <img 
                src={deity.image} 
                alt={deity.name}
                className="card-image"
                style={{ height: '500px' }}
              />
            </div>
            <div>
              <div className="card">
                <h2>About {deity.name}</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  {deity.description}
                </p>
                
                <div className="deity-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Clock size={20} style={{ color: '#ff6b35' }} />
                    <div>
                      <strong>Darshan Timings:</strong>
                      <p>{deity.timings}</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                    <Star size={20} style={{ color: '#ff6b35' }} />
                    <div>
                      <strong>Spiritual Significance:</strong>
                      <p>{deity.significance}</p>
                    </div>
                  </div>
                </div>

                <div className="offerings-section">
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Heart size={20} style={{ color: '#ff6b35' }} />
                    Popular Offerings
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {deity.offerings.map((offering, index) => (
                      <span 
                        key={index}
                        style={{
                          background: '#f8f9fa',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: '1px solid #e0e0e0'
                        }}
                      >
                        {offering}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
              <div className="grid grid-2">
                <div>
                  <h3>Worship Guidelines</h3>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Maintain silence and reverence during darshan</li>
                    <li>Remove footwear before entering the sanctum</li>
                    <li>Follow traditional customs and rituals</li>
                    <li>Photography restrictions may apply</li>
                  </ul>
                </div>
                <div>
                  <h3>Special Occasions</h3>
                  <p>
                    Special abhisheks and decorations are performed during festivals 
                    and auspicious days. Check our festival calendar for upcoming 
                    celebrations dedicated to {deity.name}.
                  </p>
                  <Link to="/festivals" className="btn btn-secondary mt-2">
                    View Festival Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeityDetail;