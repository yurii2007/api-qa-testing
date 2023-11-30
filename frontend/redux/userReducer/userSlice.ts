"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getDetails, updateAvatar } from "./operation";
// import {} from "./operations";

const initialState = {
  username: "",
  email: "",
  avatarURL: "",
  averageResult: "",
  amountOfTests: "",
  isLoading: false,
  error: "" as any,
};

const pendingUser = (state: typeof initialState) => {
  state.isLoading = true;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, pendingUser)
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.username = payload.user.username;
        state.email = payload.user.email;
        state.avatarURL = payload.user.avatarURL;
        state.averageResult = payload.user.averageResult;
        state.amountOfTests = payload.user.amountOfTests;
        state.isLoading = false;
      })
      .addCase(getDetails.rejected, (_, { payload }) => ({
        ...initialState,
        error: payload,
      }))
      .addCase(updateAvatar.pending, pendingUser)
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.avatarURL = payload.new_Url;
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
