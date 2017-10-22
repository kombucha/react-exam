import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./AppBar.css";

const AppBar = ({ title }) => (
  <div className="AppBar">
    <NavLink className="AppBar__link" to="/">
      <h1 className="AppBar__title">{title} </h1>
    </NavLink>
  </div>
);

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
