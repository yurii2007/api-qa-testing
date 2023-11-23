"use client";

import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/svg/arrow.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getQuestions } from "@/redux/testsReducer/operations";

const HomeLinks = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="mx-auto flex flex-col gap-5 mt-10 md:items-center xl:flex-row xl:gap-8 xl:justify-center">
      <Link
        onClick={() => dispatch(getQuestions("tech"))}
        href="/test"
        className="home-link bg-btn-secondary"
      >
        QA technical training
        <Image src={Arrow} alt="arrow" />
      </Link>
      <Link
        onClick={() => dispatch(getQuestions("tech"))}
        href="/test"
        className="home-link bg-btn-primary xl:px-32"
      >
        Testing theory
        <Image src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
};

export default HomeLinks;
