import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
const initialState = {
  current: {},
  settings: {},
};
export const register = createAsyncThunk("user/register", async (payload) => {
  // call api
  const data = await userApi.register(payload);

  // luu vao local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  console.log(data);
  return data.data.user;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  // call api
  const data = await userApi.login(payload);

  // luu vao local storage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.data.user;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

export default userSlice.reducer;
