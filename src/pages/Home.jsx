import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import "./Home.css";

import logo from "../assets/logo.png";

const Home = () => {
  const { language, t } = useLanguage();
  const { addToCart, toggleCart } = useCart();
  const navigate = useNavigate();

  // Filter out best sellers for home page
  const bestSellers = products
    .filter((product) => product.isBestseller)
    .slice(0, 3);

  const handleOrderNowClick = () => {
    navigate("/menu");
  };

  return (
    <div className="home-page-wrapper page-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge-top">🔥 {t("offers.limitedTime")}</span>
            <h1 className="hero-title">
              <div className="hero-title-text">
                {t("logo.nesto")}{" "}
                <span className="highlight-text">{t("logo.burgers")}</span>
              </div>
              <img src={logo} alt="" />
            </h1>
            <h2 className="hero-tagline">{t("hero.tagline")}</h2>
            <p className="hero-subtagline">{t("hero.subTagline")}</p>

            <div className="hero-cta-group">
              <Link to="/menu" className="btn btn-secondary btn-hero-primary">
                <i className="fa-solid fa-utensils"></i> {t("hero.viewMenu")}
              </Link>
              <button
                onClick={handleOrderNowClick}
                className="btn btn-primary btn-hero-secondary"
              >
                <i className="fa-solid fa-fire"></i> {t("hero.orderNow")}
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
              alt="Nesto Hero Burger"
              className="hero-burger-img"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-title">
            <h2>
              {t("whyUs.title")} <span>{t("whyUs.titleSpan")}</span>
            </h2>
          </div>

          <div className="why-us-grid">
            {/* Card 1 */}
            <div className="why-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>{t("whyUs.freshFood")}</h3>
              <p>{t("whyUs.freshFoodDesc")}</p>
            </div>

            {/* Card 2 */}
            <div className="why-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-cow"></i>
              </div>
              <h3>{t("whyUs.beef")}</h3>
              <p>{t("whyUs.beefDesc")}</p>
            </div>

            {/* Card 3 */}
            <div className="why-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>{t("whyUs.delivery")}</h3>
              <p>{t("whyUs.deliveryDesc")}</p>
            </div>

            {/* Card 4 */}
            <div className="why-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3>{t("whyUs.reviews")}</h3>
              <p>{t("whyUs.reviewsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-title">
            <h2>
              {t("featured.title")} <span>{t("featured.titleSpan")}</span>
            </h2>
            <p className="featured-subtitle-text">{t("featured.subtitle")}</p>
          </div>

          <div className="featured-grid">
            {bestSellers.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="product-img-container">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className="product-card-img"
                  />
                  {product.isSpicy && (
                    <span className="product-badge spicy-badge">
                      {t("menu.spicy")}
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="product-badge bestseller-badge">
                      {t("menu.bestseller")}
                    </span>
                  )}
                </div>
                <div className="product-card-content">
                  <h3>{product.name[language]}</h3>
                  <p className="product-card-desc">
                    {product.description[language]}
                  </p>
                  <div className="product-card-footer">
                    <span className="product-card-price">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-primary btn-add-cart"
                    >
                      <i className="fa-solid fa-cart-plus"></i>{" "}
                      {t("featured.addToCart")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="featured-explore-more">
            <Link to="/menu" className="btn btn-outline btn-explore-all">
              {t("featured.viewAll")}{" "}
              <i
                className={`fa-solid ${language === "ar" ? "fa-arrow-left" : "fa-arrow-right"}`}
              ></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
