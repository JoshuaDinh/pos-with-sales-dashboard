import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="nav-container">
        <NavLink to="/home" className="sidebar-link">
          <HomeIcon className="navLink-icon" /> <h4>Home</h4>
        </NavLink>
        <NavLink to="/CheckOut" className="sidebar-link">
          <PointOfSaleIcon className="navLink-icon" /> <h4>CheckOut</h4>
        </NavLink>
        <NavLink to="/Dashboard" className="sidebar-link">
          <AssessmentIcon className="navLink-icon" /> <h4>Dashboard</h4>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
