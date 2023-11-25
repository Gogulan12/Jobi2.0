import React from "react";

import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <header className="login-header">
        <h1 className="login-title">Welcome to jobi!</h1>
        <p className="login-subtitle">Sign in to access your account.</p>
      </header>

      <div className="login-form-container">
        <label htmlFor="username" className="login-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="login-input"
          placeholder="Enter your username"
        />

        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="login-input"
          placeholder="Enter your password"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </div>

      <p className="signup-link">
        Don't have an account?{" "}
        <a href="/register" className="signup-link-text">
          Sign up here
        </a>
        .
      </p>
    </div>
  );
}
