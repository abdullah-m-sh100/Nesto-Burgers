import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError(
        language === "ar"
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill out all required fields",
      );
      return;
    }

    // Success response simulation
    setError("");
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const handleWhatsappChat = () => {
    const message =
      language === "ar"
        ? "مرحباً نستو برجر! أود الاستفسار عن قائمتكم وخدمة التوصيل."
        : "Hello Nesto Burgers! I would like to inquire about your menu and delivery services.";
    window.open(
      `https://wa.me/972599236195?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="contact-page-wrapper page-fade-in">
      <div className="container">
        {/* Page Title */}
        <div className="section-title">
          <h2>
            {t("contact.title")} <span>{t("contact.titleSpan")}</span>
          </h2>
          <p className="contact-subtitle-text">{t("contact.subtitle")}</p>
        </div>

        <div className="contact-grid">
          {/* Info Card Column */}
          <div className="contact-info-column">
            {/* Address */}
            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-text">
                <h4>{t("contact.location")}</h4>
                <p>{t("contact.address")}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-text">
                <h4>{t("contact.phone")}</h4>
                <p>
                  <a href="tel:+972599236195">+972 59-923-6195</a>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="info-card">
              <div className="info-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="info-text">
                <h4>{t("contact.hours")}</h4>
                <p>{t("contact.hoursValue")}</p>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="whatsapp-cta-card">
              <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
              <p>
                {language === "ar"
                  ? "هل تريد الطلب مباشرة أو الاستفسار السريع؟ تواصل معنا فوراً!"
                  : "Want to place a quick order or ask a question? Chat with us now!"}
              </p>
              <button
                onClick={handleWhatsappChat}
                className="btn btn-secondary whatsapp-chat-btn"
              >
                {t("contact.whatsappBtn")}
              </button>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-column">
            <div className="contact-form-container">
              <h3>{t("contact.formTitle")}</h3>

              {success && (
                <div className="form-alert success">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{t("contact.successMsg")}</span>
                </div>
              )}

              {error && (
                <div className="form-alert error">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name">{t("contact.name")}</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email">{t("contact.email")}</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                >
                  <i className="fa-solid fa-paper-plane"></i>{" "}
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Dark Styled Map */}
        <div className="contact-map-wrapper">
          <iframe
            title="Nesto Burgers Location Map in Nablus"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13543.155452285115!2d35.234199120612984!3d32.22271871239618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce0f10c79dbad%3A0xe543e0d86fa73f69!2sRafidia%20St%2C%20Nablus!5e0!3m2!1sen!2s!4v1761060000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="google-map-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
