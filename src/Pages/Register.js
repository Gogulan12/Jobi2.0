import React from "react";

import "./Register.css";

export default function Register() {
  return (
    <div className="registration-page">
      <header className="registration-header">
        <h1 className="registration-title">Join jobi Today!</h1>
        <p className="registration-subtitle">
          Create your account and unlock amazing features.
        </p>
      </header>

      <div className="registration-form-container">
        <label htmlFor="username" className="registration-label">
          Choose a Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="registration-input"
          placeholder="Enter your desired username"
        />

        <label htmlFor="email" className="registration-label">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="registration-input"
          placeholder="Enter your email address"
        />

        <label htmlFor="password" className="registration-label">
          Create a Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="registration-input"
          placeholder="Create a strong password"
        />

        <button type="submit" className="registration-button">
          Register
        </button>
      </div>

      <p className="login-link">
        Already have an account?{" "}
        <a href="/login" className="login-link-text">
          Log in here
        </a>
        .
      </p>
    </div>
  );
}
