import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function ProductSort({ currentSort, onChange }) {
  const handleChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá từ thấp đến cao" value="salePrice:ASC" />
      <Tab label="Giá từ cao đến thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

ProductSort.propTypes = {};

export default ProductSort;
