import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/Home">
            Home
          </NavLink>
          <NavLink className="link" to="/">
            Adopt
          </NavLink>
          <NavLink className="link" to="/">
            Volunteer
          </NavLink>
          <NavLink className="link" to="/">
            Donate
          </NavLink>
          <NavLink className="link" to="/">
            Events
          </NavLink>
          <NavLink className="link" to="/">
            Contact
          </NavLink>
          <NavLink className="link" to="/">
            About
          </NavLink>
          <NavLink className="link" to="/">
            More...
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
