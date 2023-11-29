"use client";

import type { LoginBody } from "@/constants/definitions";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import instance, { token } from "@/constants/axiosinstance";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: LoginBody, thunkAPI) => {
    try {
      const { data } = await instance.post("/api/auth/register", credentials);
      token(data.accessToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
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
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state: any = await thunkAPI.getState();

  if (!state.auth.token) return thunkAPI.rejectWithValue("Unauthorized");

  try {
    token(state.auth.token);
    const { data } = await instance.post("/api/auth/logout");
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getCurrent = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state: any = await thunkAPI.getState();

  if (!state.auth.token) return thunkAPI.rejectWithValue("");

  try {
    token(state.auth.token);
    const { data } = await instance.get("/api/auth/current");
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const setToken = createAction("auth/setToken", (token: string) => ({
  payload: { token },
}));
