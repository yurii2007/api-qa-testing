"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../constants/axiosinstance";

export const getQuestions = createAsyncThunk(
  "tests/getQuestions",
  async (credentials: string, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/tests/${credentials}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
