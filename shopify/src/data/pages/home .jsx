import React from "react";

import { Link } from 'react-router-dom'
import Navbar from '../component/layout/navbar'
import { getFeaturedProducts, getProductsByCategory } from '../component/data/products'
import { useCart } from '../component/context/CartContext'
import ProductCard from '../component/ui/ProductCard'
import './home.css'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const categories = ['electronics', 'clothing', 'home', 'accessories']
  const { addToCart } = useCart()

  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">
              Welcome to ShopEase
            </h1>
            <p className="hero-subtitle">
              Discover amazing products at great prices. From electronics to fashion, 
              find everything you need in one place.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary-outline">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="category-card"
            >
              <div className="category-media" />
              <div className="category-body">
                <h3 className="category-title">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary">View All Products</Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <h2 className="section-title">Stay Updated</h2>
            <p className="newsletter-text">Subscribe to our newsletter for the latest products and exclusive offers.</p>
            <form className="newsletter-form">
              <div className="newsletter-controls">
                <input type="email" placeholder="Enter your email" className="input" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
