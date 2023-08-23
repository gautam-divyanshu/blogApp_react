import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand fixed-top border-bottom border-body navbarw"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./symbols.png" alt="blog" style={{ width: "30px" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SearchForm />

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavItem navitem="Home" to="/" />
              {true?<NavItem navitem="Login" to="/login" />:<NavItem navitem="Logout" to="/logout" />}
              {true?<NavItem navitem="Create Post" to="/compose" />:""}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
