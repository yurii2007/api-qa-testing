"use client";

import { useDispatch } from "react-redux";
import { getQuestions } from "@/redux/testsReducer/operations";
import { AppDispatch } from "@/redux/store";
import ProtectedRoute from "../components/protectedRoute";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ProtectedRoute>
      <button onClick={() => dispatch(getQuestions("tech"))}>qwe</button>
    </ProtectedRoute>
  );
};

export default Page;
