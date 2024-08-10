import React from "react";
import './Footer.css';
import { NavLink } from "react-router-dom";

export default function Footer() {
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
          {/* Add more nav items here if needed */}
        </ul>
      </div>
    </nav>
  );
}
