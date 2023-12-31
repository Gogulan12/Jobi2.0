import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import logo from "./Assets/Logo.svg";
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
import Blog from "./Pages/Blog";
import Error404 from "./Pages/Error404";
import UnderConstruction from "./Pages/UnderConstruction";
import Pricing from "./Pages/Pricing";
import JobDetail from "./Pages/JobDetail";
import Search from "./Pages/search/Search";

import Create from "./Pages/create/Create";

// Authentication
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
      if (isDropdownOpen) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen, isDropdownOpen]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="backgroundnavContainer">
            <div className="navContainer">
              <nav>
                <NavLink exact to="/">
                  <img src={logo} alt="" />
                </NavLink>
                <button
                  className={`hamburger-button ${menuOpen ? "open" : ""}`}
                  onClick={(e) => {
                    stopPropagation(e);
                    toggleMenu();
                  }}
                >
                  <FontAwesomeIcon icon={faBars} className="fa-bars" />
                </button>
              </nav>
              <div className={`navigationLinks ${menuOpen ? "open" : ""}`}>
                <div className="pagelinks">
                  <NavLink exact to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                  <NavLink to="/jobboard" onClick={toggleMenu}>
                    Job Board
                  </NavLink>
                  <NavLink to="/about" onClick={toggleMenu}>
                    About
                  </NavLink>
                  <NavLink to="/contact" onClick={toggleMenu}>
                    Contact
                  </NavLink>
                  <NavLink to="/dashboard" onClick={toggleMenu}>
                    Dashboard
                  </NavLink>
                  <div className="dropdown">
                    <button
                      className="dropbtn"
                      onClick={(e) => {
                        stopPropagation(e);
                        toggleDropdown();
                      }}
                    >
                      <p>Pages</p>
                      <i className="arrow down"></i>
                    </button>
                    <div
                      className={`dropdown-content ${
                        isDropdownOpen ? "show" : ""
                      }`}
                    >
                      <NavLink
                        to="/pricing"
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Pricing
                      </NavLink>
                      <NavLink
                        to="/blog"
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Blog
                      </NavLink>
                      <NavLink
                        to="/error"
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        404 Error
                      </NavLink>
                      <NavLink
                        to="/construction"
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                      >
                        Construction
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="accountlinks">
                  {!user && (
                    <>
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
                    </>
                  )}

                  {user && (
                    <>
                      <p className="person">hello, {user.displayName}</p>

                      <button className="btn" onClick={logout}>
                        Logout
                      </button>
                    </>
                  )}
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
            <Route exact path="/jobboard">
              <Jobboard />
            </Route>
            <Route path="/jobData/:id">
              <JobDetail />
            </Route>
            <Route path="/login">
              {user && <Redirect to="/dashboard" />}
              {!user && <Login />}
            </Route>
            <Route path="/register">
              {user && <Redirect to="/dashboard" />}

              {!user && <Register />}
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/error">
              <Error404 />
            </Route>
            <Route path="/construction">
              <UnderConstruction />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/dashboard">
              {!user && <Redirect to="/login" />}
              {user && <Dashboard />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
