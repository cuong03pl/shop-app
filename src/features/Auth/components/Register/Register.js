import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm/RegisterForm";
import productApi from "api/productApi";
import { useDispatch } from "react-redux";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
function Register({ onCloseDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const user = await dispatch(register(values)).unwrap();
      console.log(user);
      enqueueSnackbar("This is a success message!", { variant: "success" });
      onCloseDialog();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     await productApi.getAll().then((res) => console.log(res));
  //   };

  //   fetchApi();
  // }, []);
  return <RegisterForm onSubmit={handleSubmit} />;
}

Register.propTypes = {};

export default Register;
