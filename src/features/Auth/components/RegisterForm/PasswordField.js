import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import FormHelperText from "@mui/material/FormHelperText";
// or
function PasswordField({ label, name, type, form }) {
  // xu ly loi
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    formState: { errors },
  } = form;
  return (
    <div>
      <FormControl margin="normal" fullWidth variant="outlined">
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <>
              <InputLabel htmlFor="outlined-adornment-password">
                {label}
              </InputLabel>
              <OutlinedInput
                error={!!errors[name]}
                name={name}
                id="outlined-adornment-password"
                label={label}
                type={showPassword ? "text" : "password"}
                {...field}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText error={!!errors[name]}>
                {errors[name]?.message}
              </FormHelperText>
            </>
          )}
        />
      </FormControl>
    </div>
  );
}

PasswordField.propTypes = {};

export default PasswordField;
