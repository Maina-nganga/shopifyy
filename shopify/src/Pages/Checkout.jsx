import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "credit-card",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">Order Confirmed ✅</h1>
        <p className="text-center text-gray-600">
          Thank you, {formData.name}! Your order has been placed successfully.
        </p>
        <p className="text-center text-gray-500 mt-4">
          A confirmation email has been sent to <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">
        {/* Left side — Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Shipping Information</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />

          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="payment-select"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">M-Pesa</option>
          </select>

          <button type="submit" className="checkout-btn">
            Place Order
          </button>
        </form>

        {/* Right side — Order summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-summary-item">
            <span>Subtotal</span>
            <span>$120.00</span>
          </div>
          <div className="checkout-summary-item">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="checkout-summary-item">
            <strong>Total</strong>
            <strong>$125.00</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
