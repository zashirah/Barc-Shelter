import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="navb">
        <div className="linksb">
          <NavLink className="linkb" to="/">
            HOME
          </NavLink>
          <div className="dropdownb">
            <NavLink to="/adopt">
              <button className="dropbtnb">
                <NavLink to="/ADOPT">
                  <div>ADOPT</div>
                </NavLink>
                {/* <i className="fa fa-caret-downb"></i> */}
              </button>
            </NavLink>
            <div className="dropdown-contentb">
              <NavLink to="/pets/cat">
                <div>CAT</div>
              </NavLink>
              <NavLink to="/pets/dog">
                <div>DOG</div>
              </NavLink>
            </div>
          </div>
          <NavLink className="linkb" to="/volunteer">
            VOLUNTEER
          </NavLink>
          <NavLink className="linkb" to="/donate">
            DONATE
          </NavLink>
          <NavLink className="linkb" to="/">
            EVENTS
          </NavLink>
          <NavLink className="linkb" to="/">
            CONTACT
          </NavLink>
          <NavLink className="linkb" to="/">
            ABOUT
          </NavLink>
          <div className="dropdownb">
            <NavLink to="/adopt">
              <button className="dropbtnb">
                <NavLink to="/pets/cat">
                  <div>MORE...</div>
                </NavLink>
                {/* <i className="fa fa-caret-downb"></i> */}
              </button>
            </NavLink>
            <div className="dropdown-contentb">
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
