import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div className="containerxx">
        <h1 className="h1z">Lensartz</h1>
        <ul className="nav-linksxx">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navlink ${isActive ? "navlink-active" : "navlink-inactive"} ${isActive ? '' : 'navlink-lg'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Profile"
              className={({ isActive }) =>
                `navlink ${isActive ? "navlink-active" : "navlink-inactive"} ${isActive ? '' : 'navlink-lg'}`
              }
            >
              Profile
            </NavLink>
          </li>
          {/* Add more nav items here if needed */}
        </ul>
      </div>
    </nav>
  );
}

