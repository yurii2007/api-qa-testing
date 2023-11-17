"use client";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authReducer } from "./authReducer/authSlice";
import type { User } from "../constants/definitions";

export interface State {
  user: User;
}

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
  });

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  any,
  Action
>;

// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
