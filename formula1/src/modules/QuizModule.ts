/*import { IDriver } from "../interfaces/IDriver";
import { QuizQuestion } from "../interfaces/IQuiz";

const QuizModule = (() => {
    const generateQuizQuestions = (driver: IDriver): QuizQuestion[] => {
      return [
        {
            question: `What is the nationality of ${driver.name}?`,
            correctAnswer: driver.nationality
        },
        {
            question: `Which team does ${driver.name} drive for?`,
            correctAnswer: driver.manufacturer
        },
        {
            question: `What is the age of ${driver.name}?`,
            correctAnswer: driver.age.toString()
        },
        {
            question: `Who is this driver?`,
            imageUrl: `verstappen.webp`,
            correctAnswer: driver.name
        },
        {
            question: `Which team does this driver drive for?`,
            driverName: driver.name,
            imageUrl: `verstappen.webp`,
            correctAnswer: driver.manufacturer
        }
      ];
    };
  
    const generateAllQuizQuestions = (drivers: IDriver[]): QuizQuestion[][] => {
      return drivers.map(generateQuizQuestions);
    };
  
    return {
      generateAllQuizQuestions
    };
})();

export default QuizModule;*/