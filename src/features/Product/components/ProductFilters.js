import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./filters/FilterByCategory";
import { Box } from "@mui/material";
import FilterByPrice from "./filters/FilterByPrice";
import FilterByService from "./filters/FilterByService";

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (onChange) {
      onChange({
        "category.id": newCategoryId,
      });
    }
  };
  const handlePriceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  const handleServiceChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
      <FilterByService filters={filters} onChange={handleServiceChange} />
    </Box>
  );
}

ProductFilters.propTypes = {};

export default ProductFilters;
