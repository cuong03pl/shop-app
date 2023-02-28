import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
const initialState = {
  current: JSON.parse(localStorage.getItem("user")) || {},
  settings: {},
};
export const register = createAsyncThunk("user/register", async (payload) => {
  // call api
  const data = await userApi.register(payload);

  // luu vao local storage
  localStorage.setItem("access_token", data.data.jwt);
  localStorage.setItem("user", JSON.stringify(data.data.user));

  return data.data.user;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  // call api
  const data = await userApi.login(payload);

  // luu vao local storage
  localStorage.setItem("access_token", data?.data.jwt);
  localStorage.setItem("user", JSON.stringify(data?.data.user));

  return data.data.user;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, actions) => {
      state.current = {};
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(register.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(action.payload);
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(action.payload);
        state.current = action.payload;
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
