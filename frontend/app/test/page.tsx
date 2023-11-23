"use client";

import { useSelector } from "react-redux";
import { selectQuestions } from "@/redux/selectors";

import ProtectedRoute from "@/components/protectedRoute";

import QuestionList from "./components/questionlist";
import HomeLinks from "@/components/main_links";

const Page = () => {
  const questions = useSelector(selectQuestions);

  if (questions.length === 0) {
    return (
      <ProtectedRoute>
        <HomeLinks />
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="flex justify-between items-center">
        <p className="text-font-primary text-sm leading-4 tracking-wide text-left font-semibold">
          [ Testing
          <br />
          theory_ ]
        </p>
        <button
          className="primary-btn bg-btn-primary px-10 py-[1.125rem] text-white text-[0.625rem]
           leading-3 tracking-wide text-center font-medium capitalize"
          type="button"
        >
          Finish test
        </button>
      </div>
      <QuestionList questions={questions} />
    </ProtectedRoute>
  );
};

export default Page;
