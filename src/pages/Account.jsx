import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import Button from "../Components/Button/Button";
import { useAuth } from "../Context/AuthContext";

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <aside className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center">
              <div className="bg-indigo-100 p-3 rounded-full">
                <UserIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <nav className="flex flex-col text-sm">
              {[
                { id: "profile", label: "Profile", icon: UserIcon },
                { id: "orders", label: "Orders", icon: ShoppingBagIcon },
                { id: "wishlist", label: "Wishlist", icon: HeartIcon },
                { id: "payment", label: "Payment Methods", icon: CreditCardIcon },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-6 py-3 text-left transition-all ${
                    activeTab === id
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {label}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <LogOutIcon className="h-5 w-5 mr-3" />
                Logout
              </button>
            </nav>
          </aside>

         
          <main className="md:col-span-3 bg-white shadow rounded-lg p-6">
           
            {activeTab === "profile" && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Profile Information
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name.split(" ")[0]}
                        className="mt-1 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name.split(" ")[1] || ""}
                        className="mt-1 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="mt-1 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="mt-1 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </section>
            )}

          
            {activeTab === "orders" && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Order History
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          #12345
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          May 15, 2023
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          $129.99
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            Delivered
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-indigo-600">
                          <button
                            onClick={handleViewOrder}
                            className="text-indigo-600 hover:underline"
                          >
                            View Order
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

           
            {activeTab === "wishlist" && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  My Wishlist
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                      alt="Wireless Headphones"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Wireless Noise Cancelling Headphones
                      </h3>
                      <p className="text-sm text-gray-500">$249.99</p>
                      <div className="mt-4 flex space-x-2">
                        <Button variant="secondary" size="small">
                          Remove
                        </Button>
                        <Button size="small">Add to Cart</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "payment" && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Payment Methods
                </h2>
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <CreditCardIcon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        Visa ending in 4242
                      </p>
                      <p className="text-xs text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Default
                  </span>
                </div>
                <div className="mt-6">
                  <Button variant="secondary">Add Payment Method</Button>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
