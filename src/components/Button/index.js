import React from "react";
import "./Button.css";

const Button = ({ className = "", ...props }) => (
  <button className={`Button ${className}`} {...props} />
);

export default Button;
