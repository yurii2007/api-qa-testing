import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectIsLoggedIn = (state: RootState) => state.auth.token;

export const selectToken = (state: RootState) => state.auth.token;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => isLoggedIn && token
);
