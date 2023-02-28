import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
