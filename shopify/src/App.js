import React, { useState } from "react";
import Cart from "./Cart";
import Register from "./Register";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

  function handleAddToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function handleRemoveFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  if (!user) {
    return showRegister ? (
      <Register onRegister={() => setShowRegister(false)} />
    ) : (
      <Login
        onLogin={(userData) => setUser(userData)}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="app">
      <h1>Welcome, {user.name} </h1>
      <button onClick={() => setUser(null)}>Logout</button>
      <div className="content">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;
