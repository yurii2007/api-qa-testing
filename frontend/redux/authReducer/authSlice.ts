"use client";

import { createSlice } from "@reduxjs/toolkit";

import { getCurrent, login, register } from "./operations";

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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.token;
      })
      .addCase(register.rejected, () => initialState)
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.data.username,
          email: payload.data.email,
          avatarURL: payload.data.avatarURL,
        };
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(login.rejected, () => initialState)
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.token;
        state.isAuth = true;
      });
  },
});

export const authReducer = authSlice.reducer;
