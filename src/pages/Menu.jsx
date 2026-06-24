import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './Menu.css';

const Menu = () => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState({}); // Tracking temporary feedback: { itemId: true }

  const handleAddToCart = (product) => {
    addToCart(product);
    
    // Set visual feedback
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // Filter and Search logic combined
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = activeCategory === 'all' || product.category === activeCategory;
      
      const nameMatch = (product.name[language] || product.name['en'])
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const descMatch = (product.description[language] || product.description['en'])
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchCategory && (nameMatch || descMatch);
    });
  }, [activeCategory, searchQuery, language]);

  const categories = [
    { id: 'all', label: t('menu.categories.all'), icon: 'fa-cubes' },
    { id: 'burgers', label: t('menu.categories.burgers'), icon: 'fa-hamburger' },
    { id: 'sides', label: t('menu.categories.sides'), icon: 'fa-cheese' },
    { id: 'drinks', label: t('menu.categories.drinks'), icon: 'fa-wine-glass' },
    { id: 'combos', label: t('menu.categories.combos'), icon: 'fa-box' }
  ];

  return (
    <div className="menu-page-wrapper page-fade-in">
      <div className="container">
        {/* Page Title */}
        <div className="section-title">
          <h2>{t('menu.title')} <span>{t('menu.titleSpan')}</span></h2>
        </div>

        {/* Search & Category Filter Section */}
        <div className="menu-filter-bar">
          {/* Search Input */}
          <div className="menu-search-box">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder={t('menu.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          {/* Categories Grid/Flex Selector */}
          <div className="menu-categories-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <i className={`fa-solid ${cat.icon}`}></i>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="no-menu-results">
            <i className="fa-solid fa-circle-question no-results-icon"></i>
            <p>{t('menu.noItems')}</p>
          </div>
        ) : (
          <div className="menu-products-grid">
            {filteredProducts.map((product) => {
              const isAdded = addedItems[product.id];
              return (
                <div key={product.id} className="menu-product-card">
                  <div className="menu-product-img-box">
                    <img 
                      src={product.image} 
                      alt={product.name[language]} 
                      className="menu-product-img" 
                    />
                    <div className="menu-product-badges">
                      {product.isSpicy && <span className="p-badge p-badge-spicy">{t('menu.spicy')}</span>}
                      {product.isBestseller && <span className="p-badge p-badge-bestseller">{t('menu.bestseller')}</span>}
                    </div>
                  </div>

                  <div className="menu-product-details">
                    <div className="menu-product-header">
                      <h3>{product.name[language]}</h3>
                      <span className="menu-product-price">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <p className="menu-product-desc">{product.description[language]}</p>

                    <div className="menu-product-action">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`btn menu-add-btn ${isAdded ? 'btn-success-feedback' : 'btn-primary'}`}
                      >
                        {isAdded ? (
                          <>
                            <i className="fa-solid fa-check-circle"></i> {t('menu.added')}
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-cart-plus"></i> {t('featured.addToCart')}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
