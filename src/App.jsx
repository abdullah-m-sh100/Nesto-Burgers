import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// Floating Button that interacts with the Cart
const FloatingActionButton = () => {
  const { toggleCart, getCartCount } = useCart();
  const { language } = useLanguage();

  return (
    <button 
      onClick={toggleCart} 
      className="floating-order-btn" 
      aria-label="Toggle Shopping Cart"
      title={language === 'ar' ? 'اعرض السلة' : 'View Cart'}
    >
      <i className="fa-solid fa-basket-shopping"></i>
      {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
    </button>
  );
};

const AppContent = () => {
  return (
    <div className="app-container">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Pages Router */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Cart Slider Overlay */}
      <CartModal />

      {/* Floating CTA Button */}
      <FloatingActionButton />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
