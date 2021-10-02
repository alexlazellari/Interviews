import React from "react";

import { Link } from "react-router-dom";

const header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__sub">
          <p className="nav__logo">Bored</p>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" title="Home">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/activities" className="nav__link" title="Activities">
              <i className="fas fa-puzzle-piece"></i>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contributing" className="nav__link" title="Contribute">
              <i className="fas fa-plus-square"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
