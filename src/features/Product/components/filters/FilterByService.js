import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

function FilterByService({ filters, onChange }) {
  const [values, setValues] = useState({
    isPromotion: false,
    isFreeShip: false,
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (onChange) {
      onChange({ [name]: checked });
    }
  };
  return (
    <Box sx={{ marginTop: "20px", marginBottom: "8px" }}>
      <Typography variant="subtitle2"></Typography>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((item, index) => {
          console.log(filters);
          return (
            <li key={index}>
              <FormControlLabel
                label={item.label}
                control={
                  <Checkbox
                    name={item.value}
                    // checked={filters[item.value]}
                    onChange={handleChange}
                  />
                }
              />
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

FilterByService.propTypes = {};

export default FilterByService;
