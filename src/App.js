import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import logo from "./Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Components/HamburgerMenu.css";

// page components
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Jobboard from "./Pages/JobBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="backgroundnavContainer">
          <div className="navContainer">
            <nav>
              <NavLink exact to="/">
                <img src={logo} alt="" />
              </NavLink>
              <button
                className={`hamburger-button ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBars} className="fa-bars" />
              </button>
            </nav>
            <div className={`navigationLinks ${menuOpen ? "open" : ""}`}>
              <div className="pagelinks">
                <NavLink exact to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
                <NavLink to="/jobboard" onClick={toggleMenu}>
                  Job Board
                </NavLink>
              </div>
              <div className="accountlinks">
                <NavLink to="/login" onClick={toggleMenu}>
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="register"
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jobboard">
            <Jobboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
