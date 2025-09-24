import React from 'react';
import { MapPin, Clock, Car, Camera, Utensils, Info } from 'lucide-react';
import { templeInfo } from '../data/templeData';

const VisitorInfo: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Visitor Information</h1>
          <p>Everything you need to know for your temple visit</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <div className="card-icon">
                <Clock size={32} />
              </div>
              <h3>Temple Timings</h3>
              <div className="timings">
                <div className="timing-item">
                  <strong>Morning Darshan</strong>
                  <span>6:00 AM - 12:00 PM</span>
                </div>
                <div className="timing-item">
                  <strong>Evening Darshan</strong>
                  <span>4:00 PM - 8:00 PM</span>
                </div>
                <div className="timing-item special">
                  <strong>Festival Days</strong>
                  <span>Extended hours</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <MapPin size={32} />
              </div>
              <h3>Location & Address</h3>
              <div className="location-info">
                <p><strong>{templeInfo.englishName}</strong></p>
                <p>{templeInfo.location}</p>
                <p>{templeInfo.district} District</p>
                <p>{templeInfo.state}, India</p>
                <div className="coordinates">
                  <small>Located {templeInfo.riverLocation}</small>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Car size={32} />
              </div>
              <h3>How to Reach</h3>
              <div className="transport-info">
                <div className="transport-mode">
                  <strong>By Road:</strong>
                  <p>Well-connected by state highways. Buses available from Shimoga and nearby towns.</p>
                </div>
                <div className="transport-mode">
                  <strong>By Train:</strong>
                  <p>Nearest railway station: Shimoga (45 km)</p>
                </div>
                <div className="transport-mode">
                  <strong>By Air:</strong>
                  <p>Nearest airport: Mangalore (150 km)</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Info size={32} />
              </div>
              <h3>Dress Code & Guidelines</h3>
              <div className="guidelines">
                <ul>
                  <li>Traditional Indian attire preferred</li>
                  <li>Remove footwear before entering temple</li>
                  <li>Maintain silence in sanctum sanctorum</li>
                  <li>Mobile phones on silent mode</li>
                  <li>Follow priest instructions during rituals</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Camera size={32} />
              </div>
              <h3>Photography Rules</h3>
              <div className="photo-rules">
                <div className="rule allowed">
                  <strong>✓ Allowed:</strong>
                  <p>Outer temple premises, gardens, and river views</p>
                </div>
                <div className="rule restricted">
                  <strong>✗ Restricted:</strong>
                  <p>Inside sanctum, during rituals, and flash photography</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <Utensils size={32} />
              </div>
              <h3>Facilities Available</h3>
              <div className="facilities">
                <ul>
                  <li>Free parking space</li>
                  <li>Drinking water facility</li>
                  <li>Rest rooms for devotees</li>
                  <li>Prasadam distribution counter</li>
                  <li>Temple shop for religious items</li>
                  <li>Donation counter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card map-card">
              <h2>Temple Location Map</h2>
              <div className="map-placeholder">
                <MapPin size={64} />
                <p>Interactive map will be available soon</p>
                <p>For directions, please contact: +91 8183-234567</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="card emergency-card">
              <h2>Emergency Contacts</h2>
              <div className="grid grid-3">
                <div className="contact-item">
                  <strong>Temple Office</strong>
                  <p>+91 8183-234567</p>
                </div>
                <div className="contact-item">
                  <strong>Local Police</strong>
                  <p>+91 8183-100</p>
                </div>
                <div className="contact-item">
                  <strong>Medical Emergency</strong>
                  <p>+91 8183-108</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitorInfo;