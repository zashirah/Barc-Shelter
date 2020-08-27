import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/">
            HOME
          </NavLink>
          <div className="dropdown">
            <NavLink to="/adopt">
              <button className="dropbtn">
                <NavLink to="/ADOPT">
                  <div>ADOPT</div>
                </NavLink>
                <i className="fa fa-caret-down"></i>
              </button>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/pets/cat">
                <div>CAT</div>
              </NavLink>
              <NavLink to="/pets/dog">
                <div>DOG</div>
              </NavLink>
            </div>
          </div>
          <NavLink className="link" to="/volunteer">
            VOLUNTEER
          </NavLink>
          <NavLink className="link" to="/donate">
            DONATE
          </NavLink>
          <NavLink className="link" to="/">
            EVENTS
          </NavLink>
          <NavLink className="link" to="/">
            CONTACT
          </NavLink>
          <NavLink className="link" to="/">
            ABOUT
          </NavLink>
          <div className="dropdown">
            <NavLink to="/adopt">
              <button className="dropbtn">
                <NavLink to="/pets/cat">
                  <div>MORE...</div>
                </NavLink>
                <i className="fa fa-caret-down"></i>
              </button>
            </NavLink>
            <div className="dropdown-content">
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
