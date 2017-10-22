import React from "react";
import "./TextInput.css";

const TextInput = ({ className = "", ...props }) => (
  <input className={`TextInput ${className}`} {...props} />
);

export default TextInput;
