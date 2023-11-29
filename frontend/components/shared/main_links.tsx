"use client";

import type { AppDispatch } from "@/redux/store";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { getQuestions, setTypeQuestions } from "@/redux/testsReducer/operations";

import Arrow from "@/public/svg/arrow.svg";

const HomeLinks = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="mx-auto flex flex-col gap-5 mt-10 md:items-center xl:flex-row xl:gap-8 xl:justify-center">
      <Link
        onClick={() => {
          dispatch(setTypeQuestions("tech"));
          dispatch(getQuestions("tech"));
        }}
        href="/test"
        className="group home-link bg-btn-secondary"
      >
        QA technical training
        <Image
          src={Arrow}
          alt="arrow"
          className="group-hover:translate-x-2 transition-transform"
        />
      </Link>
      <Link
        onClick={() => {
          dispatch(setTypeQuestions("theory"));
          dispatch(getQuestions("tech"));
        }}
        href="/test"
        className="group home-link bg-btn-primary xl:px-32"
      >
        Testing theory
        <Image
          src={Arrow}
          alt="arrow"
          className="group-hover:translate-x-2 transition-transform"
        />
      </Link>
    </div>
  );
};

export default HomeLinks;
