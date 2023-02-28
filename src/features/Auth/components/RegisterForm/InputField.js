import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

function InputField({ label, name, type, form }) {
  // xu ly loi
  const {
    formState: { errors },
  } = form;

  return (
    <div>
      <Controller
        sx={{ fontSize: "16px" }}
        name={name}
        control={form.control}
        render={({ field }) => (
          <TextField
            id="standard-basic"
            label={label}
            variant="outlined"
            margin="normal"
            fullWidth
            type={type}
            name={name}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            sx={{ fontSize: "16px" }}
            {...field}
          />
        )}
      />
    </div>
  );
}

InputField.propTypes = {};

export default InputField;
