"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";

import instance, { token } from "@/constants/axiosinstance";
import { RootState } from "../store";

export const getQuestions = createAsyncThunk(
  "tests/getQuestions",
  async (credentials: string, thunkAPI) => {
    try {
      const state = (await thunkAPI.getState()) as RootState;
      const { data } = await instance.get(`/api/tests/${credentials}`, {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getResult = createAsyncThunk("tests/getResult", async (_, thunkAPI) => {
  const state: any = await thunkAPI.getState();
  try {
    token(state.auth.token);
    const { data } = await instance.post("api/tests/result", {
      type: state.tests.type,
      answers: state.tests.answers,
    });
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
