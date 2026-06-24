import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("Nesto_lang") || "ar";
  });

  useEffect(() => {
    localStorage.setItem("Nesto_lang", language);
    // Apply direction and lang attributes to root html
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    // Dynamic page title update based on language
    document.title =
      language === "ar"
        ? "نستو بيرجرز | الطعم الذي لا يقاوم"
        : "Nesto Burgers | The Taste You Can't Resist";
  }, [language]);

  const switchLanguage = (lang) => {
    if (lang === "en" || lang === "ar") {
      setLanguage(lang);
    } else {
      setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    }
  };

  // Helper to translate keys like "nav.home" or "hero.title"
  const t = (keyPath) => {
    const keys = keyPath.split(".");
    let value = translations[language];

    for (const key of keys) {
      if (value && value[key] !== undefined) {
        value = value[key];
      } else {
        return keyPath; // fallback
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
