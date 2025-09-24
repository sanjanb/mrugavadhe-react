import React from "react";
import { templeInfo, templeImages } from "../data/templeData";

const Architecture: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Architecture</h1>
          <p>
            Explore the beautiful architectural features and sacred design
            elements
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Architectural Style</h2>
              <p>
                The {templeInfo.englishName} showcases the classic{" "}
                {templeInfo.architecturalStyle}
                architectural style, characterized by its intricate stone
                carvings, towering gopurams, and sacred geometry.
              </p>
              <p>
                The temple's design follows ancient Vastu Shastra principles,
                ensuring positive energy flow and spiritual harmony throughout
                the sacred space.
              </p>

              <h3>Key Features</h3>
              <ul className="feature-list">
                <li>
                  <strong>Main Sanctum:</strong> Houses the magnificent{" "}
                  {templeInfo.specialFeature}
                </li>
                <li>
                  <strong>Mandapam:</strong> Pillared halls for devotees to
                  gather
                </li>
                <li>
                  <strong>Gopuram:</strong> Ornate tower with detailed
                  sculptures
                </li>
                <li>
                  <strong>Prakaram:</strong> Circumambulatory path around the
                  sanctum
                </li>
                <li>
                  <strong>Nandi Mandapam:</strong> Sacred bull facing the main
                  deity
                </li>
                <li>
                  <strong>Temple Tank:</strong> Holy water body for ritual
                  purposes
                </li>
              </ul>
            </div>
            <div>
              <img
                src={templeImages.general[2]}
                alt="Temple Architecture"
                className="card-image"
              />
            </div>
          </div>

          <div className="mt-4">
            <h2>Sacred Geometry & Design</h2>
            <div className="grid grid-3">
              <div className="card">
                <h3>Shivalinga</h3>
                <p>
                  The main attraction is the {templeInfo.specialFeature}, which
                  represents the infinite nature of Lord Shiva and serves as the
                  focal point of worship.
                </p>
              </div>
              <div className="card">
                <h3>Stone Carvings</h3>
                <p>
                  Intricate sculptures depicting various deities, mythological
                  scenes, and spiritual symbols adorn the temple walls and
                  pillars.
                </p>
              </div>
              <div className="card">
                <h3>River Location</h3>
                <p>
                  The temple's position {templeInfo.riverLocation} provides a
                  serene backdrop and enhances the spiritual atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
