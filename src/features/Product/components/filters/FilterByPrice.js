import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleSubmit = () => {
    if (onChange) onChange(values);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Box sx={{ marginTop: "20px", marginBottom: "8px" }}>
      <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
        Danh mục sản phẩm
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          size={"small"}
          name={"salePrice_gte"}
          value={values.salePrice_gte}
          onChange={handleChange}
          sx={{ marginRight: "8px" }}
        />
        <span>-</span>
        <TextField
          size={"small"}
          name={"salePrice_lte"}
          value={values.salePrice_lte}
          onChange={handleChange}
          sx={{ marginLeft: "8px" }}
        />
      </Box>
      <Button
        sx={{ marginTop: "12px" }}
        variant="outlined"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

FilterByPrice.propTypes = {};

export default FilterByPrice;
