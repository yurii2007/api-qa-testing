"use client";

import { useSelector } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import { selectResult } from "@/redux/selectors";

import resultImg from "@/public/result_b.png";

const Desc = () => {
  const correctAnswers = useSelector(selectResult);

  return (
    <section className="mt-5 md:mt-8 mx-auto">
      <p className="text-[0.625rem] md:text-base font-medium leading-3 md:leading-5 tracking-wide flex justify-center items-center">
        Correct answers - <span className="font-bold">{correctAnswers}</span>
        <span className="inline-block mx-[10px] h-[20px] w-[1px] bg-[#D7D7D7]"></span>
        Total questions - <span className="font-bold">12</span>
      </p>
      <Image
        src={resultImg}
        alt="Cat with balloon"
        className="mt-5 md:mt-8 mx-auto md:w-[11rem] md:h-[11rem]"
        priority={false}
      />
      <p className="mt-5 md:mt-2 text-base md:text-[1.375rem] font-bold leading-5 md:leading-7 tracking-wide text-center">
        Not bad!
      </p>
      <p className="mt-4 md:mt-2 text-[0.625rem] md:text-xl font-medium leading-3 md:leading-6 tracking-wide text-center">
        But you still need to learn some materials.
      </p>
      <Link
        href="/test"
        className="primary-btn px-0 mt-5 md:mt-8 mx-auto block py-4 bg-btn-primary w-[190px] text-sm leading-4 tracking-wide
         text-white font-medium capitalize hover:opacity-90"
      >
        Try Again
      </Link>
    </section>
  );
};

export default Desc;
