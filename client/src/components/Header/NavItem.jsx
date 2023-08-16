import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to={props.to}>
        {props.navitem}
      </NavLink>
    </li>
  );
};

export default NavItem;
