import React from 'react';
import { templeInfo, templeImages } from '../data/templeData';

const History: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple History</h1>
          <p>The ancient story and sacred origins of Mallikarjuna Temple</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Mythological Significance</h2>
              <p>
                According to the sacred Hindu epic Ramayana, {templeInfo.location} holds 
                a place of great mythological importance. This is the very spot where 
                Lord Rama, during his exile, encountered and defeated the demon Maricha.
              </p>
              <p>
                Maricha had taken the form of a beautiful golden deer (Suvarna Mriga) to 
                lure Lord Rama away from Sita, as part of Ravana's plan to abduct her. 
                When Rama struck down this deceptive demon, he installed a Shivalinga 
                at this sacred spot to seek Lord Shiva's blessings.
              </p>
              <p>
                The original name of the temple was '{templeInfo.originalName}', which 
                gradually evolved to become known as {templeInfo.englishName}.
              </p>
            </div>
            <div>
              <img 
                src={templeImages.general[1]} 
                alt="Temple History" 
                className="card-image"
              />
            </div>
          </div>

          <div className="mt-4">
            <h2>Historical Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Treta Yuga</div>
                <div className="timeline-content">
                  <h3>Divine Installation</h3>
                  <p>Lord Rama installs the Shivalinga after slaying demon Maricha</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Ancient Period</div>
                <div className="timeline-content">
                  <h3>Temple Construction</h3>
                  <p>The original temple structure built in traditional Dravidian style</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Medieval Period</div>
                <div className="timeline-content">
                  <h3>Renovations & Additions</h3>
                  <p>Various rulers and devotees contributed to temple expansion</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Modern Era</div>
                <div className="timeline-content">
                  <h3>Contemporary Developments</h3>
                  <p>Modern facilities and infrastructure improvements for devotees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;