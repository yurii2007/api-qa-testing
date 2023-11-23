"use client";

import type { IAnswer } from "@/constants/definitions";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import instance from "@/constants/axiosinstance";
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
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAnswer = createAction("tests/answer", (answer: IAnswer) => ({
  payload: {
    answer: answer,
  },
}));
