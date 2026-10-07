import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import './CartModal.css';

const CartModal = () => {
  const { language, t } = useLanguage();
  const {
    cartItems,
    isCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    toggleCart,
    setIsCartOpen
  } = useCart();

  const navigate = useNavigate();

  const handleShopRedirect = () => {
    setIsCartOpen(false);
    navigate('/menu');
  };

  const handleCheckout = () => {
    // Generate text message for WhatsApp
    let message = language === 'ar' 
      ? `مرحباً نستو برجر! أود طلب الوجبات التالية:%0A%0A`
      : `Hello Nesto Burgers! I'd like to place an order for the following:%0A%0A`;

    cartItems.forEach((item, index) => {
      const itemName = item.name[language] || item.name['en'];
      message += `${index + 1}. *${itemName}* x${item.quantity} - ($${(item.price * item.quantity).toFixed(2)})%0A`;
    });

    const totalText = language === 'ar' ? 'المجموع الكلي' : 'Total Price';
    message += `%0A*${totalText}: $${getCartTotal()}*%0A%0A`;
    message += language === 'ar' 
      ? `شكراً لكم! أرجو تأكيد الطلب وتحديد وقت التوصيل.`
      : `Thank you! Please confirm my order and let me know the estimated delivery time.`;

    // WhatsApp number (+972 59-923-6195)
    const whatsappUrl = `https://wa.me/972599236195?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`cart-overlay-wrapper ${isCartOpen ? 'open' : ''}`} onClick={toggleCart} aria-hidden={!isCartOpen}>
      <div 
        className="cart-sidebar" role="dialog" aria-modal="true"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking drawer content
      >
        {/* Cart Header */}
        <div className="cart-sidebar-header">
          <h2>
            {t('cart.title')}
            {cartItems.length > 0 && <span className="cart-count-pill">{cartItems.length}</span>}
          </h2>
          <button className="cart-close-btn" onClick={toggleCart} aria-label="Close Cart">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Cart Body */}
        <div className="cart-sidebar-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <span className="empty-cart-icon"><i className="fa-solid fa-bag-shopping"></i></span>
              <p>{t('cart.empty')}</p>
              <button className="btn btn-primary" onClick={handleShopRedirect}>
                {t('hero.viewMenu')}
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name[language]} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name[language]}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    
                    <div className="cart-qty-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="qty-number">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="qty-btn"
                        aria-label="Increase quantity"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-remove"
                    aria-label="Remove item from cart"
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-subtotal">
              <span>{t('cart.total')}</span>
              <span className="total-amount">${getCartTotal()}</span>
            </div>
            
            <div className="cart-footer-buttons">
              <button className="btn btn-outline cart-clear-all-btn" onClick={clearCart}>
                <i className="fa-solid fa-trash-arrow-up"></i> {t('cart.clear')}
              </button>
              
              <button className="btn btn-secondary cart-checkout-btn" onClick={handleCheckout}>
                <i className="fa-brands fa-whatsapp"></i> {t('cart.checkout')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
