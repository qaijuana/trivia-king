import QuestionBox from "../components/QuestionBox";

const PlayTrivia = () => {
  //* fetch questions

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

  const showQuestions = () => {
    const questions = [];
    for (let i = 0; i < trivia.trivia_questions.length; i++) {
      questions.push(
        <QuestionBox question={trivia.trivia_questions[i]} number={i + 1} />
      );
    }
    return questions;
  };

  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <form action="">
          <h1 className="text-5xl text-red-600 font-semibold my-2 mb-8">
            {trivia.title}
          </h1>
          {showQuestions()}
          <button className="w-full text-white text-3xl rounded-lg bg-red-600 py-3 mb-32">
            Submit answers
          </button>
        </form>
      </div>
    </>
  );
};

export default PlayTrivia;
