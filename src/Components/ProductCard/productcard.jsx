import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "lucide-react";
import { useCart } from "../../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Support different product shapes (API uses `title` and `rating: { rate, count }`)
  const title = product.title || product.name || '';
  const ratingValue = product.rating && typeof product.rating === 'object' ? product.rating.rate : product.rating || 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <Link to={`/products/${product.id}`}>
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-gray-900 font-medium text-lg">{title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-indigo-600 font-semibold">{typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</p>
            <div className="flex items-center space-x-1 text-yellow-400">
              <span>★</span>
              <span className="text-gray-600 font-medium">{Number.isFinite(ratingValue) ? ratingValue.toFixed(1) : ratingValue}</span>
            </div>
          </div>
        </div>
      </Link>

 
      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleAddToCart}
          className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-indigo-700 transition-colors duration-200"
        >
          <ShoppingCartIcon className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200">
          <HeartIcon className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
