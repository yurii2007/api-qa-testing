"use client";

import type { IQuestion } from "../../lib/constants/definitions";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { questionAnimation } from "../../lib/constants/animation";
import QuestionForm from "./form";

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
      <ul className="mt-[1.125rem] flex gap-6 transition-transform">
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
      <div className="flex justify-between">
        <button
          onClick={() => changePosition("left")}
          disabled={currentPosition === 0}
          type="button"
        >
          prev
        </button>
        <button
          onClick={() => changePosition("right")}
          disabled={currentPosition === 11}
          type="button"
        >
          next
        </button>
      </div>
    </>
  );
};

export default QuestionList;
