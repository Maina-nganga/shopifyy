import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
  X as CloseIcon,
  SearchIcon,
} from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { user } = useAuth();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Shopify
          </Link>

         
          <div className="hidden md:flex items-center space-x-8">
          
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-indigo-600">
                Products
              </Link>
            </div>

           
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-md px-3 py-1.5 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-indigo-600" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
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
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          
          <div className="flex md:hidden items-center">
            <Link to="/cart" className="relative p-2 mr-2">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4 px-4 pt-2">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-gray-700 hover:text-indigo-600"
          >
            Products
          </Link>
          {user ? (
            <Link
              to="/account"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-indigo-600"
            >
              My Account
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-indigo-600"
            >
              Sign In
            </Link>
          )}
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
