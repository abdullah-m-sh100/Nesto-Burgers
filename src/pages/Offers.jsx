import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { offers } from "../data/products";
import "./Offers.css";

const Offers = () => {
  const { language, t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const handleClaimDeal = (offer) => {
    const offerTitle = offer.title[language] || offer.title["en"];
    const promoCode = offer.promoCode;

    let whatsappText =
      language === "ar"
        ? `مرحباً نستو برجر! أود طلب عرض: *${offerTitle}* باستخدام الكود: *${promoCode}*`
        : `Hello Nesto Burgers! I would like to order the offer: *${offerTitle}* using promo code: *${promoCode}*`;

    const url = `https://wa.me/972599236195?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="offers-page-wrapper page-fade-in">
      <div className="container">
        {/* Page Title */}
        <div className="section-title">
          <h2>
            {t("offers.title")} <span>{t("offers.titleSpan")}</span>
          </h2>
          <p className="offers-subtitle-text">{t("offers.subtitle")}</p>
        </div>

        {/* Promo Grid */}
        <div className="offers-grid">
          {offers.map((offer) => {
            const hasPromo = !!offer.promoCode;
            const isCopied = copiedCode === offer.promoCode;

            return (
              <div key={offer.id} className="offer-card">
                {/* Visual side */}
                <div className="offer-img-box">
                  <img
                    src={offer.image}
                    alt={offer.title[language]}
                    className="offer-img"
                  />
                  <span className="offer-badge-percent">
                    -{offer.discountPercent}%
                  </span>
                  <div className="offer-badge-name">
                    {offer.badge[language]}
                  </div>
                </div>

                {/* Content side */}
                <div className="offer-details">
                  <div className="offer-header">
                    <h3>{offer.title[language]}</h3>
                  </div>

                  <p className="offer-desc">{offer.description[language]}</p>

                  {offer.price && (
                    <div className="offer-price-block">
                      <span className="offer-price-lbl">
                        {t("cart.total")}:{" "}
                      </span>
                      <span className="offer-price-val">
                        ${offer.price.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {hasPromo && (
                    <div className="promo-code-container">
                      <span className="promo-label">{t("offers.code")}</span>
                      <div
                        className="promo-box"
                        onClick={() => handleCopyCode(offer.promoCode)}
                      >
                        <code>{offer.promoCode}</code>
                        <button
                          className="promo-copy-btn"
                          aria-label="Copy Promo Code"
                        >
                          {isCopied ? (
                            <span className="copied-toast">
                              <i className="fa-solid fa-check"></i>
                            </span>
                          ) : (
                            <i className="fa-regular fa-copy"></i>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="offer-action">
                    <button
                      onClick={() => handleClaimDeal(offer)}
                      className="btn btn-secondary offer-claim-btn"
                    >
                      <i className="fa-solid fa-fire"></i>{" "}
                      {t("offers.orderDeal")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
