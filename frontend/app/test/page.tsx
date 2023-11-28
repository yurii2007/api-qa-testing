"use client";

import type { AppDispatch } from "@/redux/store";

import { useDispatch, useSelector } from "react-redux";
import { selectAnswers, selectQuestions } from "@/redux/selectors";
import { useRouter } from "next/navigation";

import { getResult } from "@/redux/testsReducer/operations";

import QuestionList from "./components/questionlist";
import HomeLinks from "@/components/main_links";
import ProtectedRoute from "@/components/protectedRoute";

const Page = () => {
  const questions = useSelector(selectQuestions);
  const answers = useSelector(selectAnswers);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  if (questions.length === 0) {
    return (
      <ProtectedRoute>
        <HomeLinks />
      </ProtectedRoute>
    );
  }

  const onFinishClick = () => {
    dispatch(getResult());
    router.replace("/result");
  };

  return (
    <ProtectedRoute>
      <div className="flex justify-between items-center">
        <p className="text-font-primary text-sm leading-4 tracking-wide text-left font-semibold">
          [ Testing
          <br />
          theory_ ]
        </p>
        <button
          onClick={onFinishClick}
          className="primary-btn bg-btn-primary px-10 py-[1.125rem] text-white text-[0.625rem]
           leading-3 tracking-wide text-center font-medium capitalize disabled:opacity-70"
          type="button"
          disabled={answers.length !== 12}
        >
          Finish test
        </button>
      </div>
      <QuestionList questions={questions} />
    </ProtectedRoute>
  );
};

export default Page;
