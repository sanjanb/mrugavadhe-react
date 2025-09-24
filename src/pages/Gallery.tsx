import React, { useState } from "react";
import { templeImages } from "../data/templeData";

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allImages = [
    ...templeImages.general,
    ...templeImages.festivals,
    ...templeImages.architecture,
  ];

  const categories = [
    { id: "all", name: "All Images", images: allImages },
    { id: "general", name: "Temple Views", images: templeImages.general },
    { id: "festivals", name: "Festivals", images: templeImages.festivals },
    {
      id: "architecture",
      name: "Architecture",
      images: templeImages.architecture,
    },
  ];

  const currentImages =
    categories.find((cat) => cat.id === selectedCategory)?.images || [];

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Temple Gallery</h1>
          <p>Explore the divine beauty and sacred moments of our temple</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
              >
                {category.name} ({category.images.length})
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {currentImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image}
                  alt={`Temple ${selectedCategory} ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4>Temple View {index + 1}</h4>
                    <p>
                      {selectedCategory === "all"
                        ? "Mixed Collection"
                        : categories.find((cat) => cat.id === selectedCategory)
                            ?.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentImages.length === 0 && (
            <div className="no-images">
              <p>No images available in this category.</p>
            </div>
          )}

          <div className="mt-4">
            <div className="card">
              <h2>Share Your Temple Experience</h2>
              <p>
                Have beautiful photos from your temple visit? We'd love to
                feature them in our gallery! Send your photos to us and be part
                of our digital temple community.
              </p>
              <div className="share-actions">
                <button className="btn btn-primary">Submit Photos</button>
                <button className="btn btn-secondary">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
