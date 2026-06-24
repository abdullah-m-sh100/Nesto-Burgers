import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./About.css";

import img_1 from '../assets/products/b2.jpg'

const About = () => {
  const { language, t } = useLanguage();

  // Load the list of unique points
  const uniquePoints = t("about.uniquePoints") || [];

  return (
    <div className="about-page-wrapper page-fade-in">
      <div className="container">
        {/* Title */}
        <div className="section-title">
          <h2>
            {t("about.title")} <span>{t("about.titleSpan")}</span>
          </h2>
        </div>

        {/* Story Section */}
        <div className="about-story-section">
          <div className="story-content">
            <h3>{t("about.storyHeading")}</h3>
            <p>{t("about.storyPara1")}</p>
            <p>{t("about.storyPara2")}</p>
          </div>
          <div className="story-image-box">
            <img
              src={img_1}
              alt="Nesto Burger Chef grill"
              className="story-img"
            />
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="about-values-row">
          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h4>{t("about.missionTitle")}</h4>
            <p>{t("about.missionText")}</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h4>{t("about.visionTitle")}</h4>
            <p>{t("about.visionText")}</p>
          </div>
        </div>

        {/* Uniqueness Section */}
        <div className="about-uniqueness">
          <h3>{t("about.uniqueTitle")}</h3>
          <div className="uniqueness-grid">
            {Array.isArray(uniquePoints) &&
              uniquePoints.map((point, index) => (
                <div key={index} className="unique-item-card">
                  <span className="unique-index">0{index + 1}</span>
                  <p>{point}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
