"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addAnswer, getQuestions } from "./operations";
import { IAnswer, IQuestion } from "@/constants/definitions";

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
      })
      .addCase(addAnswer, (state, { payload: { answer } }) => {
        const prevAnswer = state.answers.findIndex(
          (el) => el.questionId === answer.questionId
        );
        if (prevAnswer !== -1) {
          state.answers[prevAnswer] = answer;
        } else {
          state.answers.push(answer);
        }
      });
  },
});

export const testReducer = testSlice.reducer;
