import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./store";

// Auth selectors

export const selectIsLoggedIn = (state: RootState) => state.auth.token;

export const selectToken = (state: RootState) => state.auth.token;

const selectIsAuth = (state: RootState) => state.auth.isAuth;

const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsAuthenticate = createSelector(
  [selectIsLoggedIn, selectToken, selectIsAuth],
  (isLoggedIn, token, isAuth) => isLoggedIn && token && isAuth
);

export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;

export const selectUser = (state: RootState) => state.auth.user;

// Tests selectors

export const selectQuestions = (state: RootState) => state.tests.questions;

export const selectAnswers = (state: RootState) => state.tests.answers;

export const selectIsTestsLoading = (state: RootState) => state.auth.isLoading;

export const selectTestsError = (state: RootState) => state.tests.error;

export const selectResult = (state: RootState) => state.tests.result;

// User selectors

export const selectUserLoading = (state: RootState) => state.user.isLoading;

export const selectUserName = (state: RootState) => state.user.username;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserAvatar = (state: RootState) => state.user.avatarURL;
export const selectUserAvg = (state: RootState) => state.user.averageResult;
export const selectUserAmountOfTests = (state: RootState) => state.user.amountOfTests;

export const selectUserInfo = createSelector(
  [
    selectUserName,
    selectUserEmail,
    selectUserAvatar,
    selectUserAvg,
    selectUserAmountOfTests,
  ],
  (username, email, avatar, avg, tests) => ({ username, email, avatar, avg, tests })
);

// app selectors

export const isLoading = createSelector(
  [selectIsAuthLoading, selectIsTestsLoading, selectUserLoading],
  (isAuthLoading, isTestsLoading, isUserLoading) =>
    isAuthLoading || isTestsLoading || isUserLoading
);

export const selectError = createSelector(
  [selectAuthError, selectTestsError],
  (authError, testsError) => authError || testsError
);
