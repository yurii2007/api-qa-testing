"use client";

import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

import { persistore, store } from "./store";

import Refresh from "./refresh";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <Refresh>{children}</Refresh>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
