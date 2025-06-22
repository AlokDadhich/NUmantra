import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { state } = useApp();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const cartItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <div className="nav-brand">
          <Link to="./" onClick={closeMenu}>
          </Link>
        </div>
        
        {/* Mobile menu toggle button - positioned to the right */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1000
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div 
          className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${isActive('/products') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link 
            to="/bulk-orders" 
            className={`nav-link ${isActive('/bulk-orders') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Bulk Orders
          </Link>
          <Link to="/cart" className="cart-btn" onClick={closeMenu}>
            <ShoppingCart size={18} style={{ marginRight: '8px' }} />
            Cart ({cartItemCount})
          </Link>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          
          .nav-menu {
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            right: 0 !important;
            background: white !important;
            flex-direction: column !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
            display: none !important;
            z-index: 999 !important;
            padding: 0 !important;
            margin: 0 !important;
            gap: 0 !important;
          }
          
          .nav-menu-open {
            display: flex !important;
          }
          
          .nav-link, .cart-btn {
            padding: 15px 20px !important;
            border-bottom: 1px solid #eee !important;
            width: 100% !important;
            text-align: left !important;
            display: block !important;
          }
          
          .company-logo {
            height: 60px !important;
          }
          
          .container {
            padding: 10px 20px !important;
          }
        }
        
        @media (min-width: 769px) {
          .nav-menu {
            display: flex !important;
          }
          
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}