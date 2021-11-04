import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TriviaResultsPage = (props) => {
  // fetch trivia

  const [score, setScore] = useState();

  const trivia = {
    title: "Marvek ",
    image:
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    likes: 5,
    tags: ["funny", "difficult", "dsfs"],
    trivia_questions: [
      {
        question: "How many choices are there?",
        choices: ["a", "b", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "Questio n 222 teo?",
        choices: ["a", "b", "3", "4"],
        correctAnswer: 1,
      },
      {
        question: "How many choices are there?",
        choices: ["a", "b", "3", "4"],
        correctAnswer: 0,
      },
      {
        question: "How many choices are there?",
        choices: ["a", "b", "3", "4"],
        correctAnswer: 3,
      },
      {
        question: "How many choices are there?",
        choices: ["a", "b", "3", "4"],
        correctAnswer: 2,
      },
    ],
  };

  useEffect(() => {
    const compareAnswers = () => {
      let triviaScore = 0;
      const answers = props.answers;
      for (let i = 0; i < answers.length; i++) {
        if (
          parseInt(answers[i]) ===
          parseInt(trivia.trivia_questions[i].correctAnswer)
        ) {
          triviaScore++;
        }
        setScore(triviaScore);
      }
    };
    compareAnswers();
    console.log("your score", score);
  });

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <div className="grid grid-cols-1">
        <h1 className="text-5xl text-red-600 font-semibold my-2 mb-8">
          {trivia.title}
        </h1>
        <div className="flex justify-center items-center gap-4">
          <h3 className="text-red-600 text-5xl">your score:</h3>
          <h2 className="text-red-600 text-9xl font-semibold">
            {score}/{props.answers.length}
          </h2>
        </div>
        <Link to="/" className="w-full grid justify-items-stretch items-center">
          <button className="justify-self-center mt-32 text-3xl rounded-lg bg-red-600 w-full text-white py-4 hover:bg-red-700">
            Return to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TriviaResultsPage;
