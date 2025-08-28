import React from "react";
import "./NavBar.css";
import NavLinks from "./NavLinks/NavLinks";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <>
      <header>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        {/* <div className="rightColumn">
          <div className="navbar">
            <NavLinks linkname="Home" url="#home" />
            <NavLinks linkname="About" url="#about" />
            <NavLinks linkname="Contact" url="#contact" />
          </div>
        </div> */}
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="searchBtn">Search</button>
        </div>
        <div className="login-signup">
          <NavLinks linkname="Login/Sign Up" url="#login/sign up" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
