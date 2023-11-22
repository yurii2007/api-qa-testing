"use client";

import { createSlice } from "@reduxjs/toolkit";

import { getCurrent, login, logout, register, setToken } from "./operations";

const initialState = {
  user: {
    username: "",
    email: "",
    avatarURL: "",
  },
  token: "",
  isLoading: false,
  isRefreshing: false,
  isAuth: false,
};

const rejectedAuth = () => initialState;
const pendingAuth = (state: any) => {
  state.isLoading = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, pendingAuth)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.token;
      })
      .addCase(register.rejected, rejectedAuth)
      .addCase(login.pending, pendingAuth)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.data.username,
          email: payload.data.email,
          avatarURL: payload.data.avatarURL,
        };
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(login.rejected, rejectedAuth)
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(getCurrent.rejected, rejectedAuth)
      .addCase(getCurrent.pending, pendingAuth)
      .addCase(logout.fulfilled, (state) => initialState)
      .addCase(logout.rejected, ()=>{
        console.log('object');
      })
      .addCase(setToken, (state, { payload }) => {
        state.token = payload.token;
      });
  },
});

export const authReducer = authSlice.reducer;
