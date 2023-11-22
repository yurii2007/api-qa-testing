"use client";

import type { AppDispatch } from "@/redux/store";

import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import FormWrapper from "../form_wrapper";
import PublicRoute from "@/app/components/publicRoute";

import { getCurrent, setToken } from "@/redux/authReducer/operations";

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
