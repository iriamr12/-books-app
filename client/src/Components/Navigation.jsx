import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";


function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link className="nav-link" to="/homepage" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register" onClick={closeMobileMenu}>
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/userProfile"
            onClick={closeMobileMenu}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
