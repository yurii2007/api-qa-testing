"use client";

import type { IQuestion } from "@/constants/definitions";
import type { AppDispatch } from "@/redux/store";

import { useDispatch, useSelector } from "react-redux";

import { selectAnswers } from "@/redux/selectors";
import { addAnswer } from "@/redux/testsReducer/testSlice";

const QuestionForm = ({ question, idx }: { question: IQuestion; idx: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const answers = useSelector(selectAnswers);

  return (
    <form className="w-72 py-10 px-5 shadow-main-shadow bg-white md:w-[704px] md:pb-14 md:px-20">
      <p className="text-font-secondary text-center uppercase text-[0.625rem] font-bold leading-3 tracking-wide">
        question <span className="text-btn-primary">{idx + 1}&nbsp;</span>/&nbsp;12
      </p>
      <h3 className="mt-5 text-xs font-bold leading-4 tracking-wide text-center text-font-primary md:text-2xl md:leading-10 md:mt-2">
        {question.question}
      </h3>
      <div className="divider"></div>
      <ul className="mt-8 flex flex-col gap-[0.875rem] md:mt-10">
        {question.answers.map((answer: string, index) => {
          return (
            <li
              key={index}
              className="font-medium text-[0.675rem] leading-3 tracking-wide text-left relative pl-9"
            >
              <input
                type="radio"
                id={answer}
                name={`answer${idx}`}
                checked={
                  answers.findIndex(
                    (el) =>
                      el.questionId === question.questionId && el.userAnswer === answer
                  ) !== -1
                }
                className="w-[18px] h-[18px] peer rounded-full appearance-none absolute top-0 left-0 z-[1] border border-font-primary cursor-pointer"
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addAnswer({ questionId: question.questionId, userAnswer: answer })
                      )
                    : null
                }
              />
              <span className="absolute top-[4px] left-[4px] p-1 w-[10px] h-[10px] rounded-full peer-checked:bg-btn-primary"></span>
              <label className="text-font-primary cursor-pointer" htmlFor={answer}>
                {answer}
              </label>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default QuestionForm;
