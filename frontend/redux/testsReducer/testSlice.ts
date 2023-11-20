"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./operations";
import { IAnswer, IQuestion } from "@/app/lib/constants/definitions";

interface ITestState {
  questions: IQuestion[];
  answers: IAnswer[];
}

const initialState = {
  questions: [],
  answers: [],
} as ITestState;

export const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getQuestions.fulfilled,
      (state, action: PayloadAction<IQuestion[]>) => {
        state.questions = [...action.payload];
      }
    );
  },
});

export const testReducer = testSlice.reducer;
