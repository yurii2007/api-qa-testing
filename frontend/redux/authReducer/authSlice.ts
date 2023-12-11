"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getCurrent, login, logout, register } from "./operations";

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
  error: "",
};

const rejectedAuth = (_: any, action: any) => ({
  ...initialState,
  error: action.payload,
});
const pendingAuth = (state: typeof initialState) => {
  state.isLoading = true;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, pendingAuth)
      .addCase(register.rejected, rejectedAuth)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = {
          username: payload.username,
          email: payload.email,
          avatarURL: payload.avatarURL,
        };
        state.token = payload.token;
      })
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
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, rejectedAuth);
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
