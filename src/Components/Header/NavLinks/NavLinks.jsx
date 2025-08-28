import React from "react";

function NavLinks(props) {
  return (
    <>
      <a href={props.url} className="nav-link">
        {props.linkname}
      </a>
    </>
  );
}

export default NavLinks;
