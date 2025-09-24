import React from 'react';
import { Heart, Gift, Users, Building } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Donate to Temple</h1>
          <p>Support the sacred activities and maintenance of our temple</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card donation-card">
              <div className="card-icon">
                <Heart size={48} />
              </div>
              <h3>General Donations</h3>
              <p>Support daily temple operations, maintenance, and religious activities.</p>
              <div className="donation-amounts">
                <button className="amount-btn">₹100</button>
                <button className="amount-btn">₹500</button>
                <button className="amount-btn">₹1000</button>
                <button className="amount-btn">₹2500</button>
              </div>
              <button className="btn btn-primary full-width">Donate Now</button>
            </div>

            <div className="card donation-card">
              <div className="card-icon">
                <Gift size={48} />
              </div>
              <h3>Special Poojas</h3>
              <p>Sponsor specific rituals and ceremonies for spiritual benefits.</p>
              <div className="pooja-options">
                <div className="pooja-item">
                  <span>Abhishek Pooja</span>
                  <span>₹501</span>
                </div>
                <div className="pooja-item">
                  <span>Rudrabhishek</span>
                  <span>₹1001</span>
                </div>
                <div className="pooja-item">
                  <span>Maha Rudrabhishek</span>
                  <span>₹2501</span>
                </div>
              </div>
              <button className="btn btn-primary full-width">Sponsor Pooja</button>
            </div>

            <div className="card donation-card">
              <div className="card-icon">
                <Building size={48} />
              </div>
              <h3>Infrastructure Development</h3>
              <p>Contribute to temple renovations, facilities, and infrastructure improvements.</p>
              <div className="infrastructure-needs">
                <ul>
                  <li>Temple renovation and maintenance</li>
                  <li>Guest house construction</li>
                  <li>Parking and road improvements</li>
                  <li>Water and sanitation facilities</li>
                </ul>
              </div>
              <button className="btn btn-primary full-width">Contribute</button>
            </div>

            <div className="card donation-card">
              <div className="card-icon">
                <Users size={48} />
              </div>
              <h3>Community Services</h3>
              <p>Support education, healthcare, and welfare programs for the local community.</p>
              <div className="community-programs">
                <ul>
                  <li>Free food distribution (Annadana)</li>
                  <li>Educational scholarships</li>
                  <li>Medical camps and healthcare</li>
                  <li>Cultural and spiritual programs</li>
                </ul>
              </div>
              <button className="btn btn-primary full-width">Support Community</button>
            </div>
          </div>

          <div className="mt-4">
            <div className="card tax-benefits">
              <h2>Tax Benefits & Transparency</h2>
              <div className="grid grid-2">
                <div>
                  <h3>80G Tax Exemption</h3>
                  <p>
                    All donations to our temple are eligible for tax deduction under 
                    Section 80G of the Income Tax Act. You will receive a tax-exempt 
                    receipt for your contribution.
                  </p>
                  <p><strong>Registration Number:</strong> AAAAT1234F20231</p>
                </div>
                <div>
                  <h3>Transparent Usage</h3>
                  <p>
                    We maintain complete transparency in the usage of donations. 
                    Annual reports and fund utilization statements are published 
                    regularly for donor confidence.
                  </p>
                  <button className="btn btn-secondary">View Annual Report</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card donation-methods">
              <h2>How to Donate</h2>
              <div className="grid grid-3">
                <div className="method-card">
                  <h4>Online Payment</h4>
                  <p>Secure online donations via credit card, debit card, or net banking.</p>
                </div>
                <div className="method-card">
                  <h4>Bank Transfer</h4>
                  <p><strong>Account:</strong> Mallikarjuna Temple Trust</p>
                  <p><strong>A/C No:</strong> 1234567890</p>
                  <p><strong>IFSC:</strong> SBIN0001234</p>
                </div>
                <div className="method-card">
                  <h4>Cash/Cheque</h4>
                  <p>Visit temple office or send DD in favor of "Mallikarjuna Temple Trust"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;