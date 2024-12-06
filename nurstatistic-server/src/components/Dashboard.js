import React from "react";
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search..." />
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px" }}>
        <h1>Dashboard Content Here</h1>
      </div>

      {/* Button Row */}
      <div className="button-row">
        <button>Personal Information</button>
        <button>Medical History</button>
        <button>Recorded Symptoms</button>
        <button>Diagnosis and Order</button>
      </div>
    </div>
  );
};

export default Dashboard;

