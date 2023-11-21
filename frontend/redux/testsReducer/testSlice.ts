"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./operations";
import { IAnswer, IQuestion } from "@/app/lib/constants/definitions";

interface ITestState {
  questions: IQuestion[];
  answers: IAnswer[];
  isLoading: boolean;
}

const initialState = {
  questions: [],
  answers: [],
  isLoading: false,
} as ITestState;

export const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.fulfilled, (state, action: PayloadAction<IQuestion[]>) => {
        state.questions = [...action.payload];
        state.isLoading = false;
      })
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const testReducer = testSlice.reducer;
