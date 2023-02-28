import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputField from "../RegisterForm/InputField";
import PasswordField from "../RegisterForm/PasswordField";

function LoginForm({ onSubmit }) {
  const schema = yup
    .object({
      identifier: yup
        .string()
        .required("Please enter your email")
        .email("Please enter a valid email."),
      password: yup
        .string()
        .required("Please enter your password")
        .min(6, "Please enter at least 6 character"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) await onSubmit(values);
  };
  const { formState } = form;
  return (
    <div>
      <Avatar sx={{ margin: "0 auto", bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography sx={{ textAlign: "center" }} component="h1" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name={"identifier"} label={"Email"} form={form} />
        <PasswordField name={"password"} label={"Password"} form={form} />

        <Button type="submit" variant="contained" fullWidth>
          {formState.isSubmitting ? (
            <CircularProgress size={30} color="secondary" />
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
