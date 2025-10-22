// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  X as CloseIcon,
  SearchIcon,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css"; // Only if you want extra styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { user } = useAuth();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">ShopEase</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="nav-link"
              >
                Products
              </Link>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
              <SearchIcon className="search-icon" />
            </div>

            {/* Cart + User */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
                {cartItemsCount > 0 && (
                  <span className="cart-badge">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {user ? (
                <Link to="/account" className="p-2">
                  <UserIcon className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="signin-btn"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="relative p-2 mr-2">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <CloseIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-2 pt-2 shadow-lg">
          <Link
            to="/"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          {user ? (
            <Link
              to="/account"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          )}
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input w-full"
            />
            <SearchIcon className="search-icon" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
