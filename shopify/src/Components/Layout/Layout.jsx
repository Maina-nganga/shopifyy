import React from 'react';
import Navbar from "../../Components/Navbar/navbar";
import Footer from '../../Components/Footer/footer';
import { CartProvider } from '../../Context/CartContext';
import { AuthProvider } from '../../Context/AuthContext';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
