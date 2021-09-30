import React, { useState } from "react";
import "./mobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      className={`mobile-navigation ${
        toggleMenu && "mobile-navigation-toggle"
      }`}
    >
      <div
        className={`mobile-navigation-menu ${
          toggleMenu && "mobile-navigation-menu-toggle"
        }`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className={`menu-line ${toggleMenu && "menu-line-toggle"}`}></div>
        <div className={`menu-line ${toggleMenu && "menu-line-toggle"}`}></div>
        <div className={`menu-line ${toggleMenu && "menu-line-toggle"}`}></div>
      </div>
      {toggleMenu && (
        <div className="mobile-navigation-dropdown">
          <nav className="nav-menu">
            <Link
              to="/Dashboard"
              className="nav-link"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Dashboard
            </Link>
            <Link
              to="/CheckOut"
              className="nav-link"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              CheckOut
            </Link>
            <Link
              to="/Home"
              className="nav-link"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
