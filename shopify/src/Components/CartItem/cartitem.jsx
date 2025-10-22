
import React from "react";
import { Link } from "react-router-dom";
import { Trash2Icon, PlusIcon, MinusIcon } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="cart-item-details">
        <div className="cart-item-header">
          <h3>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="cart-item-price">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <p className="cart-item-category">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>

        <div className="cart-item-actions">
          <div className="quantity-control">
            <button onClick={handleDecreaseQuantity}>
              <MinusIcon className="icon" />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncreaseQuantity}>
              <PlusIcon className="icon" />
            </button>
          </div>

          <button onClick={handleRemove} className="remove-btn">
            <Trash2Icon className="icon" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
