import React from "react";
import "./Alert.css";

const Alert = ({ message }) => {
  return (
    <div className="alert-message">
      <p className="response-message response-message--success">{message}</p>
    </div>
  );
};

export default Alert;
