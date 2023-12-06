import React from "react";

import error from "../Assets/404.svg";
import "./Error404.css";

import errorarrow from "../Assets/ErrorImages/Arrow3.svg";

export default function Error404() {
  return (
    <div className="error-page">
      <div className="errorImage">
        <img src={error} alt="" />
      </div>
      <div className="error-container">
        <h1 className="error-title">
          404 <br />
          <span>Page Not Found</span>
        </h1>
        <p className="error-text">
          Publishing industries for previewing layouts & visual mockups used.
        </p>
        <a href="/" className="errorGoBack">
          <p>Go Back</p>
          <img src={errorarrow} alt="" />
        </a>
      </div>
    </div>
  );
}
