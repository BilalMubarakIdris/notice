import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <>
      <header className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notice">Notice</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
