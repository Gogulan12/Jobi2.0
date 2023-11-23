// import "../App.css";
// import React, { useState } from "react";

// import { NavLink } from "react-router-dom";
// import logo from "../Logo.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./HamburgerMenu.css";

// // page components

// function HamburgerMenu() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="App">
//       <div className="navContainer">
//         <nav>
//           <NavLink exact to="/">
//             <img src={logo} alt="" />
//           </NavLink>
//           <button
//             className={`hamburger-button ${menuOpen ? "open" : ""}`}
//             onClick={toggleMenu}
//           >
//             <FontAwesomeIcon icon={faBars} className="fa-bars" />
//           </button>
//         </nav>
//         <div className={`navigationLinks ${menuOpen ? "open" : ""}`}>
//           <NavLink exact to="/" onClick={toggleMenu}>
//             Home
//           </NavLink>
//           <NavLink to="/contact" onClick={toggleMenu}>
//             Contact
//           </NavLink>
//           <NavLink to="/about" onClick={toggleMenu}>
//             About
//           </NavLink>
//           <NavLink to="/jobboard" onClick={toggleMenu}>
//             Job Board
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default HamburgerMenu;
