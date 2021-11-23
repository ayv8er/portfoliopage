import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navHead">
      <div>
        <h1>Richard J Oh</h1>
      </div>
      <div className="navigator">
        <NavLink to="/about" className="links">
          About Me
        </NavLink>
        <NavLink to="/projects" className="links">
          My Projects
        </NavLink>
        <NavLink to="/contact" className="links">
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
