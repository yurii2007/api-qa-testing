"use client";

import type { AppDispatch } from "@/redux/store";

import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import { getCurrent } from "@/redux/authReducer/operations";
import { setToken } from "@/redux/authReducer/authSlice";

import FormWrapper from "../form_wrapper";
import PublicRoute from "@/components/shared/publicRoute";

const Page = () => {
  const token = useSearchParams().get("token");
  const dispatch = useDispatch<AppDispatch>();

  // checking is login with google after redirect from backend with token
  if (token) {
    dispatch(setToken(token));
    dispatch(getCurrent());
  }

  return (
    <PublicRoute>
      <FormWrapper />
    </PublicRoute>
  );
};

export default Page;
