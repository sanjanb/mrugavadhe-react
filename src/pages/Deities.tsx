import React from "react";
import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { deities } from "../data/templeData";

const Deities: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Deities</h1>
          <p>
            Discover the sacred deities and their divine significance in our
            temple
          </p>
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
                  <img
                    src={deity.image}
                    alt={deity.name}
                    className="card-image"
                  />
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
                        <span key={index} className="offering-tag">
                          {offering}
                        </span>
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
                  <p>
                    <strong>Morning Darshan:</strong> 6:00 AM - 12:00 PM
                  </p>
                  <p>
                    <strong>Evening Darshan:</strong> 4:00 PM - 8:00 PM
                  </p>
                  <p>
                    <strong>Special Days:</strong> Extended hours during
                    festivals
                  </p>
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


    </div>
  );
};

export default Deities;
