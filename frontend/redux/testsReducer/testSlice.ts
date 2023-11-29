"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addAnswer, getQuestions, getResult, setTypeQuestions } from "./operations";
import { IAnswer, IQuestion } from "@/constants/definitions";

interface ITestState {
  questions: IQuestion[];
  answers: IAnswer[];
  isLoading: boolean;
  result: null | number;
  type: "tech" | "theory" | "";
  error: unknown;
}

const initialState = {
  questions: [],
  answers: [],
  isLoading: false,
  result: null,
  type: "",
  error: "",
} as ITestState;

const pendingTests = (state: ITestState) => {
  state.isLoading = true;
};

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
      .addCase(getQuestions.pending, pendingTests)
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getResult.pending, pendingTests)
      .addCase(getResult.fulfilled, (state, { payload }) => {
        state.result = payload.rightAnswers;
        state.isLoading = false;
      })
      .addCase(getResult.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
      })
      .addCase(setTypeQuestions, (state, { payload }) => {
        state.type = payload.type;
      });
  },
});

export const testReducer = testSlice.reducer;
