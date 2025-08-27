import React from "react";

function NavLinks(props) {
  return (
    <>
      <a href={props.url}>{props.linkname}</a>
    </>
  );
}

export default NavLinks;
