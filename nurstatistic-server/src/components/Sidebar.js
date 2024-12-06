import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBuilding, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="menu">
        <li>
          <NavLink to="/" activeClassName="active">
            <FaTachometerAlt className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/departments" activeClassName="active">
            <FaBuilding className="icon" /> Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/helpdesk" activeClassName="active">
            <FaHeadset className="icon" /> Help Desk
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="active">
            <FaSignOutAlt className="icon" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
