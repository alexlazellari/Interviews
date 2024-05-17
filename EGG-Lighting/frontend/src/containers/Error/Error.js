import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <main className="main">
      <div className="error__box">
        <h1 className="error__404">404</h1>
        <h2 className="error__title">OOPS! NOTHING WAS FOUND</h2>
        <p className="error__content">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/" className="error__link">
          GO TO HOMEPAGE
        </Link>
      </div>
    </main>
  );
};

export default Error;
