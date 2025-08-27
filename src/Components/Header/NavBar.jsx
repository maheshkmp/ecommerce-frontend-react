import React from "react";
import NavLinks from "./NavLinks/NavLinks";

function NavBar() {
  return (
    <>
      <NavLinks linkname="Home" url="#home" />
      <NavLinks linkname="About" url="#about" />
      <NavLinks linkname="Contact" url="#contact" />
    </>
  );
}

export default NavBar;
