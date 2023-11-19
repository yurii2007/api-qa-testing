"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./operations";

const initialState = {
  questions: [],
  answers: [],
};

export const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questions.concat(action.payload);
    });
  },
});

export const testReducer = testSlice.reducer;
