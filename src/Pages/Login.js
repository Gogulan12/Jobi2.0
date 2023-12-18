import React from "react";
import { useState } from "react";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1 className="login-title">Welcome to jobi!</h1>
        <p className="login-subtitle">Sign in to access your account.</p>
      </header>

      <form onSubmit={handleSubmit} className="login-form-container">
        <label htmlFor="username" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="login-input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

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
