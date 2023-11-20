import { IQuestion } from "../../lib/constants/definitions";
import QuestionForm from "./form";

const QuestionList = ({ questions }: { questions: IQuestion[] }) => {
  return (
    <ul className="mt-[1.125rem]">
      {questions.map((question, idx) => (
        <li key={question.questionId}>
          <QuestionForm question={question} idx={idx} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
