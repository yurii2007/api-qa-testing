"use client";

import type { User } from "@/constants/definitions";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./authReducer/authSlice";
import { testReducer } from "./testsReducer/testSlice";
import { userReducer } from "./userReducer/userSlice";

export interface State {
  user: User;
}

const authPersistSettings = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const testsPersistSettings = {
  key: "tests",
  storage,
  whitelist: ["result"],
};

const persistedAuth = persistReducer(authPersistSettings, authReducer);

const persistedTests = persistReducer(testsPersistSettings, testReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
    tests: persistedTests,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, any, Action>;
