import React from "react";
import "./NavLinks.css";

function NavLinks(props) {
  return (
    <>
      <a className="navlinks" href={props.url}>
        {props.linkname}
      </a>
    </>
  );
}

export default NavLinks;
