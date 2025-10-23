import React from "react";
import "./Account.css";

const Account = () => {
  const user = {
    name: "",
    email: "",
    joined: "",
  };

  return (
    <div className="account-container">
      <h1 className="account-title">My Account</h1>

      <div className="account-card">
        <h2 className="account-section-title">Profile Information</h2>
        <div className="account-details">
          <p><strong>Name:</strong> {user.name || "—"}</p>
          <p><strong>Email:</strong> {user.email || "—"}</p>
          <p><strong>Member since:</strong> {user.joined || "—"}</p>
        </div>

        <button className="account-btn">Edit Profile</button>
      </div>

      <div className="account-card">
        <h2 className="account-section-title">Order History</h2>
        <p className="account-placeholder">You haven’t made any orders yet.</p>
      </div>
    </div>
  );
};

export default Account;
