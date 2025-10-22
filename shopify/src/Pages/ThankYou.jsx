import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
         Thank You for Your Purchase!
        </h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully. We’ll send you an email with
          the details shortly.
        </p>
        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
