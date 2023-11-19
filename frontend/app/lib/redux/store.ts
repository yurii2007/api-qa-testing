"use client";

import type { User } from "../constants/definitions";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./authReducer/authSlice";
import { testReducer } from "./testsReducer/testSlice";

export interface State {
  user: User;
}

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      tests: testReducer,
    },
  });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tests: testReducer,
  },
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, any, Action>;
