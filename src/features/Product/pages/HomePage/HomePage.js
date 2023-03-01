import React from "react";
import PropTypes from "prop-types";
import ListPage from "../ListPage/ListPage";
import { Box } from "@mui/material";
function HomePage(props) {
  return (
    <Box padding={4}>
      <ListPage />
    </Box>
  );
}

HomePage.propTypes = {};

export default HomePage;
