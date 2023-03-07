import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./filters/FilterByCategory";
import { Box } from "@mui/material";
import FilterByPrice from "./filters/FilterByPrice";

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (onChange) {
      console.log(filters);
      console.log(newCategoryId);
      onChange({
        ...filters,
        "category.id": newCategoryId,
      });
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      {/* <FilterByPrice onChange={handleCategoryChange} /> */}
    </Box>
  );
}

ProductFilters.propTypes = {};

export default ProductFilters;
