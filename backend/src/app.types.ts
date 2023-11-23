export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface IAnswer {
  questionId: number;
  userAnswer: string;
}

export interface BodyResult {
  type: "tech" | "theory";
  answers: IAnswer[];
}

export interface IQuestion {
  question: string;
  questionId: number;
  answers: string[];
  rightAnswer: string;
}
