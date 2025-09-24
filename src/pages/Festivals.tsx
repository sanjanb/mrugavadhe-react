import React from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { festivals } from "../data/templeData";

const Festivals: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Festivals</h1>
          <p>
            Celebrate divine festivals and spiritual gatherings throughout the
            year
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="festivals-grid">
            {festivals.map((festival) => (
              <div key={festival.id} className="card festival-card">
                <div className="festival-header">
                  <h3>{festival.name}</h3>
                  <div className="festival-date">
                    <Calendar size={20} />
                    <span>{festival.date}</span>
                  </div>
                </div>

                <p className="festival-description">{festival.description}</p>

                <div className="festival-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>
                      <strong>Duration:</strong> {festival.duration}
                    </span>
                  </div>
                  <div className="detail-item">
                    <Users size={16} />
                    <span>
                      <strong>Significance:</strong> {festival.significance}
                    </span>
                  </div>
                </div>

                <div className="festival-activities">
                  <h4>Special Activities:</h4>
                  <ul>
                    {festival.specialActivities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="card info-card">
              <h2>Festival Calendar 2024</h2>
              <div className="calendar-info">
                <div className="month-section">
                  <h3>Upcoming Major Festivals</h3>
                  <div className="upcoming-festivals">
                    <div className="festival-item">
                      <div className="date-badge">Mar</div>
                      <div>
                        <strong>Maha Shivaratri</strong>
                        <p>The great night of Lord Shiva</p>
                      </div>
                    </div>
                    <div className="festival-item">
                      <div className="date-badge">Aug</div>
                      <div>
                        <strong>Shravan Mondays</strong>
                        <p>Special prayers throughout the month</p>
                      </div>
                    </div>
                    <div className="festival-item">
                      <div className="date-badge">Oct</div>
                      <div>
                        <strong>Navaratri</strong>
                        <p>Nine nights of divine celebration</p>
                      </div>
                    </div>
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

export default Festivals;
