import React from "react";
import PropTypes from "prop-types";
import "./GlobalStyles.module.scss";
function GlobalStyles({ children }) {
  return <div>{children}</div>;
}

GlobalStyles.propTypes = {};

export default GlobalStyles;
