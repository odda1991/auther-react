import React from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
    return (
      <nav>
        <ul className="app">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;