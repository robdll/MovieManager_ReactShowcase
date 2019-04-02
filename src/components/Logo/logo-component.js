/* React import */
import React from "react";

/* Style */
import "./logo-style.scss";

/* Component implementation */
const Logo = () => (
  <img
    className={`logo`}
    alt={`Website Logo`}
    src={`${process.env.PUBLIC_URL}/svg/logo.svg`}
  />
);

export default Logo;
