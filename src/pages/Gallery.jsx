import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Gallery.css";

import img_1 from '../assets/products/b1.jpg'
import img_2 from '../assets/products/b2.jpg'
import img_3 from '../assets/products/s1.jpg'
import img_4 from '../assets/products/img_4.png'
import img_5 from '../assets/products/s3.png'
import img_6 from '../assets/products/b4.jpg'
import img_7 from '../assets/products/s2.png'
import img_8 from '../assets/products/d2.jpg'
import img_9 from '../assets/products/d3.jpg'

const Gallery = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      type: "burgers",
      title: "Classic Smashed Tray",
      src: img_1,
    },
    {
      id: 2,
      type: "burgers",
      title: "Triple Melt Stack",
      src: img_2,
    },
    {
      id: 3,
      type: "sides",
      title: "Loaded Cheddar French Fries",
      src: img_3,
    },
    {
      id: 4,
      type: "burgers",
      title: "Swiss Truffle Smashed Burger",
      src: img_4,
    },
    {
      id: 5,
      type: "sides",
      title: "Stretchy Mozzarella Cheese Sticks",
      src: img_5,
    },
    {
      id: 6,
      type: "burgers",
      title: "Crispy Buffalo Hot Chicken",
      src: img_6,
    },
    {
      id: 7,
      type: "sides",
      title: "Golden Crunchy Onion Rings",
      src: img_7,
    },
    {
      id: 8,
      type: "sides",
      title: "Fresh Lemon Mint Mojito",
      src: img_8,
    },
    {
      id: 9,
      type: "sides",
      title: "Craft Oreo Milkshake",
      src: img_9,
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.type === activeFilter,
  );

  return (
    <div className="gallery-page-wrapper page-fade-in">
      <div className="container">
        {/* Page Title */}
        <div className="section-title">
          <h2>
            {t("gallery.title")} <span>{t("gallery.titleSpan")}</span>
          </h2>
          <p className="gallery-subtitle-text">{t("gallery.subtitle")}</p>
        </div>

        {/* Filters */}
        <div className="gallery-filter-tabs">
          <button
            className={`gallery-filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            {t("gallery.all")}
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === "burgers" ? "active" : ""}`}
            onClick={() => setActiveFilter("burgers")}
          >
            {t("gallery.burgers")}
          </button>
          <button
            className={`gallery-filter-btn ${activeFilter === "sides" ? "active" : ""}`}
            onClick={() => setActiveFilter("sides")}
          >
            {t("gallery.sides")}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setLightboxImg(item)}
            >
              <img src={item.src} alt={item.title} className="gallery-img" />
              <div className="gallery-hover-overlay">
                <i className="fa-solid fa-expand expand-icon"></i>
                <span className="gallery-hover-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxImg(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">{lightboxImg.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
