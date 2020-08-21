import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Branding</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="header__navlink--selected" exact>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/message" activeClassName="header__navlink--selected">
              Message
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="header__navlink--selected">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="header__navlink--selected">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
