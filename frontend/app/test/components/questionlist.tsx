"use client";

import type { IQuestion } from "@/constants/definitions";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { questionAnimation } from "@/constants/animation";
import QuestionForm from "./form";
import prevArrow from "@/public/svg/prevArrow.svg";
import nextArrow from "@/public/svg/nextArrow.svg";

const QuestionList = ({ questions }: { questions: IQuestion[] }) => {
  const [[currentPosition, direction], setCurrentPosition] = useState([0, "right"]);

  const changePosition = (direction: "left" | "right") => {
    if (direction === "left") {
      return setCurrentPosition([currentPosition - 1, direction]);
    }
    setCurrentPosition([currentPosition + 1, direction]);
  };

  return (
    <>
      <ul className="mt-[1.125rem] flex gap-6 transition-transform justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.li
            key={currentPosition}
            variants={questionAnimation}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <QuestionForm question={questions[currentPosition]} idx={currentPosition} />
          </motion.li>
        </AnimatePresence>
      </ul>
      <div className="flex justify-between mt-5">
        <button
          onClick={() => changePosition("left")}
          className="group tests__btn bg-btn-primary disabled:opacity-70 gap-3 justify-start text-white"
          disabled={currentPosition === 0}
          type="button"
        >
          <Image src={prevArrow} width={24} height={24} alt="left-side arrow" className="group-hover:group-enabled:-translate-x-2 transition-transform" />
          <p className="hidden md:block font-medium">Previous question</p>
        </button>
        <button
          onClick={() => changePosition("right")}
          className="group tests__btn bg-white disabled:opacity-70 justify-between text-font-primary"
          disabled={currentPosition === 11}
          type="button"
        >
          <p className="hidden md:block font-medium">Next question</p>
          <Image src={nextArrow} width={24} height={24} alt="right-side arrow" className="group-hover:group-enabled:translate-x-2 transition-transform" />
        </button>
      </div>
    </>
  );
};

export default QuestionList;
