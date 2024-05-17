import React from "react";

import { NavLink } from "react-router-dom";

const header = ({ activePage }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__sub">
          <p className="nav__logo">Bored</p>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              activeClassName="active__link"
              className="nav__link"
              title="Home"
              exact
            >
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/activities"
              activeClassName="active__link"
              className="nav__link"
              title="Activities"
            >
              <i className="fas fa-puzzle-piece"></i>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contributing"
              activeClassName="active__link"
              className="nav__link"
              title="Contribute"
            >
              <i className="fas fa-plus-square"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
