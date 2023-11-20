"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "@/app/lib/constants/axiosinstance";
import { RootState } from "../store";

export const getQuestions = createAsyncThunk(
  "tests/getQuestions",
  async (credentials: string, thunkAPI) => {
    try {
      const state = await thunkAPI.getState() as RootState;
      const { data } = await instance.get(`/api/tests/${credentials}`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`
        }
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
