import React from 'react';
import { Users, Heart, Building } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Trust & Management</h1>
          <p>Learn about the governance and administration of our sacred temple</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Temple Trust</h2>
              <p>
                The Mallikarjuna Temple is managed by a dedicated trust comprising 
                devoted individuals committed to preserving the temple's sanctity 
                and serving the devotee community.
              </p>
              <p>
                The trust ensures proper maintenance of the temple premises, 
                conducts regular poojas and festivals, and manages various 
                charitable activities for the benefit of devotees and the local community.
              </p>

              <h3>Our Mission</h3>
              <ul className="feature-list">
                <li>Preserve and maintain the ancient temple heritage</li>
                <li>Facilitate spiritual practices and religious ceremonies</li>
                <li>Serve the devotee community with dedication</li>
                <li>Promote cultural and spiritual education</li>
                <li>Support charitable activities and social welfare</li>
              </ul>
            </div>
            <div>
              <div className="card">
                <Users className="service-icon" />
                <h3>Governance Structure</h3>
                <p>The temple is governed by a board of trustees elected from the devotee community.</p>
              </div>
              <div className="card mt-2">
                <Building className="service-icon" />
                <h3>Management Team</h3>
                <p>Experienced administrators ensure smooth daily operations and temple services.</p>
              </div>
              <div className="card mt-2">
                <Heart className="service-icon" />
                <h3>Volunteer Program</h3>
                <p>Dedicated volunteers assist in various temple activities and community service.</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2>Trust Activities</h2>
            <div className="grid grid-3">
              <div className="card">
                <h3>Religious Services</h3>
                <p>
                  Regular poojas, festivals, and spiritual ceremonies are conducted 
                  according to ancient traditions and customs.
                </p>
              </div>
              <div className="card">
                <h3>Cultural Programs</h3>
                <p>
                  Educational and cultural events are organized to promote 
                  spiritual awareness and community bonding.
                </p>
              </div>
              <div className="card">
                <h3>Community Service</h3>
                <p>
                  Charitable activities including food distribution, education 
                  support, and healthcare initiatives for the needy.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card cta-card">
              <h2>Get Involved</h2>
              <p>
                Join our mission to serve the divine and the community. Whether through 
                donations, volunteering, or participating in temple activities, 
                your contribution makes a difference.
              </p>
              <div className="cta-actions">
                <a href="/donate" className="btn btn-primary">Make a Donation</a>
                <a href="/contact" className="btn btn-secondary">Volunteer With Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trust;