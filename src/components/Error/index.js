import React from "react";
import PropTypes from "prop-types";

import darthVadorGif from "./darth-vador.gif";
import "./Error.css";

const Error = ({ message }) => (
  <div className="Error">
    <img className="Error__img" src={darthVadorGif} alt="Darth vador is not happy" />
    <span className="Error__message">{message}</span>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
