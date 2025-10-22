
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>Your one-stop shop for all your shopping needs.</p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/products?category=electronics">Electronics</Link></li>
            <li><Link to="/products?category=clothing">Clothing</Link></li>
            <li><Link to="/products?category=home">Home & Kitchen</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ShopEase. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
