import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MenuItem from "react-bootstrap/DropdownMenu";

const Nav = () => {
  return (
    <nav>
      <>
        <div className="nav">
          <div className="links">
            <NavLink className="link" to="/Home">
              Home
            </NavLink>
            <div className="dropdown">
              {["Adopt"].map((variant) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item eventKey="1">CATS</Dropdown.Item>
                  <Dropdown.Item eventKey="2">DOGS</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    {/* Active Item */}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ))}{" "}
            </div>

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
            <div className="dropdown">
              {["More"].map((variant) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                >
                  <Dropdown.Item eventKey="1">LOST CATS/DOGS</Dropdown.Item>
                  <Dropdown.Item eventKey="2">NEWS</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    {/* Active Item */}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ))}{" "}
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Nav;
