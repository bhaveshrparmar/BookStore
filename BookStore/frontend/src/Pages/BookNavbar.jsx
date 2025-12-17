import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          MyBookStore
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                BookList
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Create Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
