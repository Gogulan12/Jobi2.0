import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

import "./Register.css";

export default function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className="registration-page">
      <header className="registration-header">
        <h1 className="registration-title">Join jobi Today!</h1>
        <p className="registration-subtitle">
          Create your account and unlock amazing features.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="registration-form-container">
        <label htmlFor="email" className="registration-label">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="registration-input"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="username" className="registration-label">
          Choose a Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="registration-input"
          placeholder="Enter your desired username"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />

        {!isPending && (
          <button type="submit" className="registration-button">
            Register
          </button>
        )}
        {isPending && (
          <button className="registration-button" disabled>
            loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>

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
