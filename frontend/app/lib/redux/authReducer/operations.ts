"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { token } from "../../constants/axiosinstance";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/auth/register", credentials);
      token(data.accessToken);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post("api/auth/login", credentials);
    token(data.accessToken);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
