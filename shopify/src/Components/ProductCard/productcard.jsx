
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-bottom">
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-rating">
              <span className="star">★</span>
              <span className="rating-value">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="product-hover">
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          <ShoppingCartIcon className="icon" />
          <span>Add to Cart</span>
        </button>

        <button className="wishlist-btn">
          <HeartIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
