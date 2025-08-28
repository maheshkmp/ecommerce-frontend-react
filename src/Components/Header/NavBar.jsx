import React from "react";
import "./NavBar.css";
import NavLinks from "./NavLinks/NavLinks";

function NavBar() {
  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <div className="navbar">
          <NavLinks linkname="Home" url="#home" />
          <NavLinks linkname="About" url="#about" />
          <NavLinks linkname="Contact" url="#contact" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
