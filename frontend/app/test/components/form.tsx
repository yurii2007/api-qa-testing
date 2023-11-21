import { IQuestion } from "@/app/lib/constants/definitions";

const QuestionForm = ({ question, idx }: { question: IQuestion; idx: number }) => {
  return (
    <form className="w-72 py-10 px-5 shadow-main-shadow bg-white">
      <p className="text-font-secondary text-center uppercase text-[0.625rem] font-bold leading-3 tracking-wide">
        question <span className="text-btn-primary">{idx + 1}&nbsp;</span>/&nbsp;12
      </p>
      <h3 className="mt-5 text-xs font-bold leading-4 tracking-wide text-center text-font-primary">
        {question.question}
      </h3>
      <div className="divider"></div>
      <ul className="mt-8 flex flex-col gap-[0.875rem]">
        {question.answers.map((answer: string, index) => {
          return (
            <li
              key={index}
              className="flex gap-5 text-font-primary font-medium text-[0.675rem] leading-3 tracking-wide text-left"
            >
              <input
                type="radio"
                id={answer}
                name={`answer${idx}`}
                className="w-[18px] h-[18px] border rounded-full"
              />
              <label htmlFor={answer}>{answer}</label>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default QuestionForm;
