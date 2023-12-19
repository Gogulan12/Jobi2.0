import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

// styles
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login(email, password);
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

        {!isPending && (
          <button type="submit" className="login-button">
            Login
          </button>
        )}
        {isPending && (
          <button className="login-button" disabled>
            loading
          </button>
        )}
        {error && <p>{error}</p>}
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
