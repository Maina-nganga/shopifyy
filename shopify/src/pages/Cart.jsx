import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBagIcon, ArrowRightIcon } from "lucide-react";
import CartItem from "../components/ui/CartItem";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          // ---------------- EMPTY CART ----------------
          <div className="text-center py-12">
            <ShoppingBagIcon className="mx-auto h-16 w-16 text-gray-400" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added any products to your cart yet.
            </p>
            <div className="mt-6">
              <Link to="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          </div>
        ) : (
          // ---------------- CART WITH ITEMS ----------------
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">
                    Cart Items (
                    {cart.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                </div>

                <div className="px-6 py-4">
                  <ul className="divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li key={item.product.id} className="py-6">
                        <CartItem item={item} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                  <button
                    onClick={clearCart}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Clear Cart
                  </button>
                  <Link
                    to="/products"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order Summary
                  </h2>
                </div>

                <div className="px-6 py-4 space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <p>Subtotal</p>
                    <p className="text-gray-900 font-medium">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <p>Shipping</p>
                    <p className="text-gray-900 font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </p>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <p>Tax</p>
                    <p className="text-gray-900 font-medium">
                      ${tax.toFixed(2)}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <p className="text-lg font-medium text-gray-900">Total</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <Button
                    onClick={handleCheckout}
                    fullWidth
                    size="large"
                    className="flex items-center justify-center gap-2"
                  >
                    Checkout
                    <ArrowRightIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-6 bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  Have a promo code?
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-grow rounded-l-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md hover:bg-gray-300">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
