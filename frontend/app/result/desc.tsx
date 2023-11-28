"use client";

import { useSelector } from "react-redux";

import Link from "next/link";
import Image from "next/image";

import { selectResult } from "@/redux/selectors";

import resultImg from "@/public/result_b.png";

const Desc = () => {
  const correctAnswers = useSelector(selectResult);

  return (
    <section className="mt-5 mx-auto">
      <p className="text-[0.625rem] font-medium leading-3 tracking-wide flex justify-center items-center">
        Correct answers - <span className="font-bold">{correctAnswers}</span>
        <span className="inline-block mx-[10px] h-[20px] w-[1px] bg-[#D7D7D7]"></span>
        Total questions - <span className="font-bold">12</span>
      </p>
      <Image src={resultImg} alt="Cat with balloon" className="mt-5 mx-auto" />
      <p className="mt-5 text-base font-bold leading-5 tracking-wide text-center">
        Not bad!
      </p>
      <p className="mt-4 text-[0.625rem] font-medium leading-3 tracking-wide text-center">
        But you still need to learn some materials.
      </p>
      <Link
        href="/test"
        className="primary-btn mt-5 mx-auto block py-4 bg-btn-primary w-[190px] text-white font-medium capitalize"
      >
        Try Again
      </Link>
    </section>
  );
};

export default Desc;
