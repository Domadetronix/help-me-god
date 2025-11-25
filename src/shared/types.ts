export interface Question {
  question: string;
  answers: string[];
}

export interface QuestionWithId extends Question {
  id: number;
}
