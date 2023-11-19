"use client";

import { useDispatch } from "react-redux";
import { getQuestions } from "../lib/redux/testsReducer/operations";
import { AppDispatch } from "../lib/redux/store";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <button onClick={() => dispatch(getQuestions("tech"))}>qwe</button>
    </div>
  );
};

export default Page;
