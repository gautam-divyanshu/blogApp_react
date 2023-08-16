import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SearchForm />

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavItem navitem="Home" to="/" />
              <NavItem navitem="Create Post" to="/compose" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
