import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  // We cannot use lifecycle hooks in a stateless functional component
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
