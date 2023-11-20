import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Auth selectors

export const selectIsLoggedIn = (state: RootState) => state.auth.token;

export const selectToken = (state: RootState) => state.auth.token;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => isLoggedIn && token
);

// Tests selectors

export const selectQuestions = (state: RootState) => state.tests.questions;

export const selectAnswers = (state: RootState) => state.tests.answers;
