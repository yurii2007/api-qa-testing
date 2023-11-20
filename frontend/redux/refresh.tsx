"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { useEffect } from "react";
import { getCurrent } from "./authReducer/operations";

const Refresh = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return children;
};

export default Refresh;
