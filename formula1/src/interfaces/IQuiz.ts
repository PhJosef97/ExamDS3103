// Regler for hvordan et quiz objekt skal se ut
export interface IQuiz {
  name: string | undefined;
  question: string;
  options: string[];
  answer: string;
  image: string;
}