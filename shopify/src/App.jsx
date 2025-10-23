import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './pages/home'
import Products from './pages/products'
import ProductDetail from './pages/productDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/login'
import Register from './pages/Register'
import Account from './pages/Account'
export  default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  )
}