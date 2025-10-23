import React from "react";

export default function Account() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Account</h1>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="mb-2"><strong>Name:</strong> John Doe</p>
        <p className="mb-2"><strong>Email:</strong> jdoe@example.com</p>
        <p><strong>Member Since:</strong> October 2025</p>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Edit Profile
      </button>
    </div>
  );
}
