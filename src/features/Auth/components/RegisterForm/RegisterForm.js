import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import CircularProgress from "@mui/material/CircularProgress";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PasswordField from "./PasswordField";

function RegisterForm({ onSubmit }) {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Please enter your full name")
        .test(
          "should has at least two words",
          "Please enter at least two words",
          (value) => {
            return value.split(" ").length >= 2;
          }
        ),
      email: yup
        .string()
        .required("Please enter your email")
        .email("Please enter a valid email."),
      password: yup
        .string()
        .required("Please enter your password")
        .min(6, "Please enter at least 6 character"),
      retypePassword: yup
        .string()
        .required("Please enter your retype password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
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
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name={"fullName"} label={"Full name"} form={form} />
        <InputField name={"email"} label={"Email"} form={form} />
        <PasswordField name={"password"} label={"Password"} form={form} />
        <PasswordField
          name={"retypePassword"}
          label={"Retype Password"}
          form={form}
        />
        <Button type="submit" variant="contained" fullWidth>
          {formState.isSubmitting ? (
            <CircularProgress size={30} color="secondary" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
