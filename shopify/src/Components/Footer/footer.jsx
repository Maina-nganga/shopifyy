import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
 
        <div>
          <h3 className="text-lg font-bold mb-2">ShopEase</h3>
          <p className="text-sm">Your one-stop shop for all your shopping needs.</p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/products" className="hover:underline">All Products</Link>
            </li>
            <li>
              <Link to="/products?category=electronics" className="hover:underline">Electronics</Link>
            </li>
            <li>
              <Link to="/products?category=clothing" className="hover:underline">Clothing</Link>
            </li>
            <li>
              <Link to="/products?category=home" className="hover:underline">Home & Kitchen</Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:underline">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/returns" className="hover:underline">Returns & Refunds</Link>
            </li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-6 py-4 text-sm flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2025 Shopify. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
