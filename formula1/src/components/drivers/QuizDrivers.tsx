import { useContext, useState, useEffect } from 'react';
import { DriverContext } from '../../contexts/DriverContext';
import { IDriverContext } from '../../interfaces/IDriverContext';
import { IQuiz } from '../../interfaces/IQuiz';

const QuizDrivers = () => {
    const { drivers } = useContext(DriverContext) as IDriverContext;

    const [quiz, setQuiz] = useState<IQuiz[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [score, setScore] = useState<number>(0); // Add this line


    // plassere alle options i en array og shuffle de på nytt for hver gang
    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    

    // Generer quiz med alle options og riktige svar
    const generateQuiz = () => {
        const quiz: IQuiz[] = drivers.map(driver => {
            // Define the other options
            let otherOptions = ['Sergio Perez', 'Max Verstappen', 'Lewis Hamiltion'];
    
            // Check if driver.name is already in the other options
            if (otherOptions.includes(driver.name)) {
                // If it is, replace it with a different string
                otherOptions[otherOptions.indexOf(driver.name)] = 'Another Driver';
            }
    
            return {
                name: driver.name, // Add this line
                question: `Who is this?`,
                options: shuffleArray([driver.name, ...otherOptions]),
                answer: driver.name,
                image: `http://localhost:5178/images/${driver.image}`
            };
        });
    
        setQuiz(quiz);
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleNextQuestion = () => {
        // Check if the user's answer is correct
        if (selectedOption === quiz[currentQuestion].answer) {
            // If it is, increment the score
            setScore(score + 1);
        }

        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Quiz is over, reset everything
            alert(`Quiz over! Your score is ${score} out of ${quiz.length}`);
            setCurrentQuestion(0);
            setScore(0);
        }
    };

    // Generate the quiz when the component mounts
    useEffect(() => {
        generateQuiz();
    }, [drivers]);

    return (
        <section className='row'>
        {quiz.length > 0 && (
            <article className='col-lg-4 col-md-6 col-sm-8 mx-auto'>
                <p>{quiz[currentQuestion].question}</p>
                <img className='img-fluid' src={quiz[currentQuestion].image} alt={quiz[currentQuestion].name} />
                {quiz[currentQuestion].options.map(option => (
                    <div className='option' key={option}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label>{option}</label>
                    </div>
                ))}
                <button onClick={handleNextQuestion}>Next Question</button>
                </article>
        )}
    </section>
    );
};

export default QuizDrivers;