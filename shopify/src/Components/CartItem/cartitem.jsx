import React from "react";
import { Link } from "react-router-dom";
import { Trash2Icon, PlusIcon, MinusIcon } from "lucide-react";
import { useCart } from "../../context/CartContext";

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
    <div className="flex gap-4 p-4 border-b border-gray-200 items-center">
      
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

   
      <div className="flex-1 flex flex-col justify-between">
 
        <div className="flex justify-between items-start">
          <h3 className="text-gray-900 font-medium text-lg">
            <Link to={`/products/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-gray-900 font-semibold">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>

     
        <p className="text-gray-500 text-sm mt-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>

        
        <div className="flex items-center justify-between mt-3">
        
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 hover:bg-gray-100 transition"
            >
              <MinusIcon className="w-4 h-4 text-gray-600" />
            </button>
            <span className="px-3 py-1 text-gray-700">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 hover:bg-gray-100 transition"
            >
              <PlusIcon className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
          >
            <Trash2Icon className="w-4 h-4" />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
