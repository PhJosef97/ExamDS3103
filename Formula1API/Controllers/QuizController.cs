/*namespace Formula1API.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Formula1API.Models;
    using Formula1API.Interfaces;
    using System.Collections.Generic;

    [ApiController]
    [Route("[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly List<Quiz> quizes;

        public QuizController()
        {
            quizes = new List<Quiz>
            {
                new Quiz
                {
                    Question = "Hvem er verdensmester i 2020?",
                    Options = new string[] { "Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc" },
                    CorrectAnswer = "Lewis Hamilton"
                },
                new Quiz
                {
                    Question = "Hvilket lag vant konstruktørmesterskapet i 2020?",
                    Options = new string[] { "Mercedes", "Red Bull", "Ferrari", "McLaren" },
                    CorrectAnswer = "Mercedes"
                },
                new Quiz
                {
                    Question = "Hvilket lag"
                }
                // Add more quizzes here
            };
        }

        [HttpGet]
        public ActionResult<IEnumerable<IQuiz>> GetQuiz()
        {
            return quizes;
        }
    }
}
*/