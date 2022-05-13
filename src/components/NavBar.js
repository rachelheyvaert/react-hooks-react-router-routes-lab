import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
  return (<div>
    <NavLink
    to="/"
    exact>
  <li>Home</li>
    </NavLink>
    <NavLink
    to="/movies"
    exact>
  <li>Movies</li>
    </NavLink>
    <NavLink
    to="/directors"
    exact>
  <li>Directors</li>
    </NavLink>
    <NavLink
    to="/actors"
    exact>
  <li>Actors</li>
    </NavLink>
  </div>)
}

export default NavBar;
