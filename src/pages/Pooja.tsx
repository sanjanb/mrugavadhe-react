import React from "react";
import { Clock, IndianRupee, Heart } from "lucide-react";
import { poojas } from "../data/templeData";

const Pooja: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Pooja & Seva</h1>
          <p>Participate in sacred rituals and divine services</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="poojas-grid">
            {poojas.map((pooja) => (
              <div key={pooja.id} className="card pooja-card">
                <div className="pooja-header">
                  <h3>{pooja.name}</h3>
                  <div className="pooja-price">
                    <IndianRupee size={18} />
                    <span>₹{pooja.cost}</span>
                  </div>
                </div>

                <p className="pooja-description">{pooja.description}</p>

                <div className="pooja-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>
                      <strong>Duration:</strong> {pooja.duration}
                    </span>
                  </div>
                  <div className="detail-item">
                    <Heart size={16} />
                    <span>
                      <strong>Benefits:</strong> {pooja.benefits}
                    </span>
                  </div>
                </div>

                <div className="pooja-includes">
                  <h4>Timing:</h4>
                  <p>{pooja.timing}</p>
                </div>

                <button className="btn btn-primary full-width">
                  Book This Pooja
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <div className="grid grid-2">
              <div className="card">
                <h2>How to Book Poojas</h2>
                <div className="booking-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Choose Your Pooja</h4>
                      <p>
                        Select from our range of sacred rituals and services
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Select Date & Time</h4>
                      <p>
                        Choose a convenient date and time slot for the ritual
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Make Payment</h4>
                      <p>Complete the booking with secure online payment</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Attend the Ritual</h4>
                      <p>Participate in the sacred ceremony with our priests</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h2>Contact for Bookings</h2>
                <div className="contact-info">
                  <p>
                    <strong>Temple Office:</strong>
                  </p>
                  <p>📞 +91 8183-234567</p>
                  <p>📧 poojas@mallikarjunatemple.org</p>
                  <p>
                    <strong>Booking Hours:</strong>
                  </p>
                  <p>🕘 9:00 AM - 6:00 PM</p>
                  <p>📅 All days except festival days</p>
                </div>
                <div className="mt-3">
                  <button className="btn btn-secondary full-width">
                    Call Temple Office
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pooja;
