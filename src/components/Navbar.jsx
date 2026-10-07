import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { to: "/", key: "home" },
  { to: "/menu", key: "menu" },
  { to: "/offers", key: "offers" },
  { to: "/about", key: "about" },
  { to: "/gallery", key: "gallery" },
  { to: "/reviews", key: "reviews" },
  { to: "/contact", key: "contact" },
];

const Navbar = () => {
  const { language, switchLanguage, t } = useLanguage();
  const { getCartCount, toggleCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Strengthen the bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleLangToggle = () => {
    switchLanguage(language === "en" ? "ar" : "en");
    closeMenu();
  };

  const count = getCartCount();

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
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

        {/* Links */}
        <nav className={`navbar-nav ${isOpen ? "active" : ""}`}>
          <div className="nav-links-group">
            {NAV_ITEMS.map(({ to, key }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </div>

          {/* Mobile-only actions inside the drawer */}
          <div className="nav-drawer-actions mobile-only">
            <Link to="/menu" className="btn btn-secondary" onClick={closeMenu}>
              <i className="fa-solid fa-utensils"></i> {t("hero.orderNow")}
            </Link>
            <button onClick={handleLangToggle} className="nav-lang-btn">
              <MdLanguage /> {language === "en" ? "العربية" : "English"}
            </button>
          </div>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            onClick={handleLangToggle}
            className="nav-lang-btn desktop-only"
            aria-label="Toggle Language"
          >
            <MdLanguage />
            <span>{language === "en" ? "AR" : "EN"}</span>
          </button>

          <Link to="/menu" className="btn btn-secondary nav-cta desktop-only">
            {t("hero.orderNow")}
          </Link>

          <button
            onClick={toggleCart}
            className="nav-cart-btn"
            aria-label={t("nav.cart")}
          >
            <BsCart4 />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>

          <button
            onClick={() => setIsOpen((v) => !v)}
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
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
