import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Nav = () => {
  return (
    <nav>

      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <div class="dropdown">
            <NavLink to="/adopt">
              <button class="dropbtn">
                ADOPT
                <i class="fa fa-caret-down"></i>
              </button>

            </NavLink>
            <div class="dropdown-content">
              <NavLink to="/pets/cat">
                <div>CAT</div>
              </NavLink>
              <NavLink to="/pets/dog">
                <div>DOG</div>
              </NavLink>
            </div>

          </div>
          <NavLink className="link" to="/donate">
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
          <div class="dropdown">
            <NavLink to="/adopt">
              <button class="dropbtn">
                MORE..
                <i class="fa fa-caret-down"></i>
              </button>

            </NavLink>
            <div class="dropdown-content">
              <NavLink to="/pets/cat">
                <div>LOST DOGS/CATS</div>
              </NavLink>
              <NavLink to="/pets/dog">
                <div>NEWS</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
