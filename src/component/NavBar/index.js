import React from 'react'
import {
    Link
  } from "react-router-dom";

import './style.css'

function NavBar({text,handleOnClick}) {
  return (
    <nav className="navBar">
        <span>
          <Link to="/addSurvey">Add survey</Link>
        </span>
        <span>
          <Link to="/">Check Survey</Link>
        </span>
    </nav>
  );
}

export default NavBar;
