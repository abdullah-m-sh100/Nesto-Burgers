import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

import logo from '../assets/logo.png'

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Branding Column */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-logo">
                <span className="logo-emoji"><img src={logo} alt="" /></span>
                <span className="logo-text">
                  {t("logo.nesto")}
                  <span className="logo-highlight"> {t("logo.burgers")}</span>
                </span>
              </Link>
              <p className="footer-tagline">{t("footer.tagline")}</p>
              <div className="footer-socials">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a
                  href="https://wa.me/972599236195"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col links-col">
              <h3>{t("footer.links")}</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/">{t("nav.home")}</Link>
                </li>
                <li>
                  <Link to="/menu">{t("nav.menu")}</Link>
                </li>
                <li>
                  <Link to="/offers">{t("nav.offers")}</Link>
                </li>
                <li>
                  <Link to="/about">{t("nav.about")}</Link>
                </li>
                <li>
                  <Link to="/gallery">{t("nav.gallery")}</Link>
                </li>
                <li>
                  <Link to="/reviews">{t("nav.reviews")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("nav.contact")}</Link>
                </li>
              </ul>
            </div>

            {/* Operating Hours Column */}
            <div className="footer-col hours-col">
              <h3>{t("contact.hours")}</h3>
              <p className="footer-hours-value">{t("contact.hoursValue")}</p>
              <div className="footer-hours-badge">
                <i className="fa-regular fa-clock"></i>
                <span>Open Now</span>
              </div>
            </div>

            {/* Contact Details Column */}
            <div className="footer-col contact-col">
              <h3>{t("nav.contact")}</h3>
              <ul className="footer-contact-details">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{t("contact.address")}</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+972599236195">+972 59-923-6195</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:hello@Nestoburgers.com">
                    hello@Nestoburgers.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <div className="footer-container bottom-container">
          <p className="copyright-text">{t("footer.rights")}</p>
          <p className="designer-text">
            {t("footer.designedBy")}{" "}
            <i className="fa-solid fa-heart accent-heart"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
