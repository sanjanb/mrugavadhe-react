import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import { templeInfo, templeImages } from "../data/templeData";

const About: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>About {templeInfo.englishName}</h1>
          <p>
            Learn about the history, significance, and spiritual importance of
            our sacred temple
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Temple Overview</h2>
              <p>
                {templeInfo.name} ({templeInfo.englishName}) is a revered Hindu
                temple located in {templeInfo.location}, {templeInfo.district}{" "}
                district of {templeInfo.state}. This ancient temple holds
                immense historical and mythological significance.
              </p>
              <p>
                According to the epic Ramayana, this sacred place is where Lord
                Rama installed a Shivalinga after slaying the demon Maricha, who
                had appeared in the form of a golden deer to mislead Sita. The
                temple was originally known as
                {templeInfo.originalName}.
              </p>
              <p>
                The temple is beautifully situated on the banks of the{" "}
                {templeInfo.river} river, creating a serene and spiritually
                uplifting atmosphere for devotees and visitors.
              </p>
            </div>
            <div>
              <img
                src={templeImages.general[0]}
                alt="Temple Overview"
                className="card-image"
              />
            </div>
          </div>

          <div className="grid grid-3 mt-4">
            <Link to="/about/history" className="card service-card">
              <Clock className="service-icon" />
              <h3>History</h3>
              <p>
                Discover the ancient origins and historical significance of our
                temple.
              </p>
            </Link>
            <Link to="/about/architecture" className="card service-card">
              <MapPin className="service-icon" />
              <h3>Architecture</h3>
              <p>
                Explore the beautiful architectural features and design
                elements.
              </p>
            </Link>
            <Link to="/about/trust" className="card service-card">
              <Users className="service-icon" />
              <h3>Trust & Management</h3>
              <p>Learn about the temple trust and governance structure.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
