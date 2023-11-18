"use client";

import type { LoginBody } from "../../constants/definitions";

import { createAsyncThunk } from "@reduxjs/toolkit";

import instance, { token } from "../../constants/axiosinstance";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: LoginBody, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/auth/register", credentials);
      token(data.accessToken);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: LoginBody, thunkAPI) => {
    try {
      const { data } = await instance.post("api/auth/login", credentials);
      token(data.accessToken);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCurrent = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state: any = await thunkAPI.getState();
  try {
    const { data } = await instance.get("/api/auth/current", {
      headers: {
        Cookie: `token=${state.user.token}`,
      },
    });
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
