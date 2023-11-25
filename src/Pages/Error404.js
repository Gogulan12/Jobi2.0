import React from "react";

import error from "../Assets/404.svg";
import "./Error404.css";

export default function Error404() {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-text">
          We're sorry, but it seems like you've taken a wrong turn. The page you
          are looking for might be under construction, moved, or doesn't exist.
        </p>
        <p className="error-text">
          Don't worry, let's get you back on track:
          <ul className="error-list">
            <li className="error-list-item">
              <a href="/" className="error-link">
                Go to the Home Page
              </a>
            </li>
            <li className="error-list-item">
              <a href="/contact" className="error-link">
                Contact Support
              </a>
            </li>
          </ul>
        </p>
        <p className="error-text">
          Meanwhile, here's a random programming joke for you:
          <em className="error-joke">
            Why do programmers prefer dark mode? Because the light attracts
            bugs!
          </em>
        </p>
      </div>
      <div className="errorImage">
        <img src={error} alt="" />
      </div>
    </div>
  );
}
