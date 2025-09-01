import React from "react";

import "./NavBar.css";
import NavLinks from "./NavLinks/NavLinks";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <>
      <header>
        <div className="header-bar">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="search-btn">Search</button>
          </div>
          <div className="login-signup">
            <button className="login-signup-btn">
              <NavLinks linkname="Login/Sign Up" url="#login/sign up" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default NavBar;
