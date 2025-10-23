
import React from "react";
import "./Cart.css";


function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>Ksh {item.price}</span>
              <button onClick={() => onRemoveFromCart(item.id)}>❌</button>
            </div>
          ))}
          <hr />
          <h3>Total: Ksh {total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
