import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [details, setDetails] = useState({
    name: "",
    address: "",
    cardNumber: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", details);
    alert("Order placed successfully!");
    navigate("/thankyou");  
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
