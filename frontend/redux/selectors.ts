import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./store";

// Auth selectors

export const selectIsLoggedIn = (state: RootState) => state.auth.token;

export const selectToken = (state: RootState) => state.auth.token;

const selectIsAuth = (state: RootState) => state.auth.isAuth;

export const selectIsAuthenticate = createSelector(
  [selectIsLoggedIn, selectToken, selectIsAuth],
  (isLoggedIn, token, isAuth) => isLoggedIn && token && isAuth
);

const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;

// Tests selectors

export const selectQuestions = (state: RootState) => state.tests.questions;

export const selectAnswers = (state: RootState) => state.tests.answers;

const selectIsTestsLoading = (state: RootState) => state.auth.isLoading;

// app selectors

export const isLoading = createSelector(
  [selectIsAuthLoading, selectIsTestsLoading],
  (isAuthLoading, isTestsLoading) => isAuthLoading || isTestsLoading
);
