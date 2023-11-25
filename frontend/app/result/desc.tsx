"use client";

import { useSelector } from "react-redux";

import { selectAnswers, selectResult } from "@/redux/selectors";
import Link from "next/link";

const Desc = () => {
  const correctAnswers = useSelector(selectResult);

  return (
    <section className="mt-5 mx-auto">
      <p className="text-[0.625rem] font-medium leading-3 tracking-wide flex justify-center items-center">
        Correct answers - <span className="font-bold">{correctAnswers}</span>
        <span className="inline-block mx-[10px] h-[20px] w-[1px] bg-[#D7D7D7]"></span>
        Total questions - <span className="font-bold">12</span>
      </p>
      // IMAGE // DYNAMIC RENDERING
      <Link
        href="/test"
        className="primary-btn mt-5 mx-auto block bg-btn-primary w-[190px] text-white font-medium capitalize"
      >
        Try Again
      </Link>
    </section>
  );
};

export default Desc;
