import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

import logo from "../assets/logo.png";

const Navbar = () => {
  const { language, switchLanguage, t } = useLanguage();
  const { getCartCount, toggleCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLangToggle = () => {
    switchLanguage(language === "en" ? "ar" : "en");
    closeMenu();
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-emoji">
            <img src={logo} alt="" />
          </span>
          <span className="logo-text">
            {t("logo.nesto")}
            <span className="logo-highlight"> {t("logo.burgers")}</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className={`navbar-nav ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.menu")}
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.offers")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.gallery")}
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.reviews")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </NavLink>

          {/* Mobile language switch inside nav drawer */}
          <button
            onClick={handleLangToggle}
            className="nav-lang-btn mobile-only"
          >
            <MdLanguage /> {language === "en" ? "العربية" : "English"}
          </button>
        </nav>

        {/* Right Actions (Cart & Lang & Menu togglers) */}
        <div className="navbar-actions">
          {/* Language Switcher */}
          <button
            onClick={handleLangToggle}
            className="nav-lang-btn desktop-only"
            aria-label="Toggle Language"
          >
            <MdLanguage />

            <span>{language === "en" ? "AR" : "EN"}</span>
          </button>

          {/* Shopping Cart Trigger */}
          <button
            onClick={toggleCart}
            className="nav-cart-btn"
            aria-label="Open Shopping Cart"
          >
            <BsCart4 />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </button>

          {/* Mobile Hamburger menu */}
          <button
            onClick={toggleMenu}
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
