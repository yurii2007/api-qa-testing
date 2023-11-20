"use client";

import { createSlice } from "@reduxjs/toolkit";

import { login, register } from "./operations";

const initialState = {
  user: {
    username: "",
    email: "",
    avatarURL: "",
  },
  token: "",
  isLoading: false,
  isRefreshing: false,
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
        state.token = payload.accessToken;
      })
      .addCase(register.rejected, () => initialState)
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.accessToken;
      })
      .addCase(login.rejected, () => initialState);
  },
});

export const authReducer = authSlice.reducer;