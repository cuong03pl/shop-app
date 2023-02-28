import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import LoginForm from "../LoginForm/LoginForm";
import { login } from "features/Auth/userSlice";
function Login({ onCloseDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const user = await dispatch(login(values)).unwrap();
      console.log(user);
      enqueueSnackbar("This is a success message!", { variant: "success" });
      onCloseDialog();
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     await productApi.getAll().then((res) => console.log(res));
  //   };

  //   fetchApi();
  // }, []);
  return <LoginForm onSubmit={handleSubmit} />;
}

Login.propTypes = {};

export default Login;
