import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row items-center justify-between">
          <Link className="brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar">
            <Link to="/search" className="navbar-link">
              search
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
