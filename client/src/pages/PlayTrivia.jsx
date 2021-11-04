import { useEffect, useState } from "react";
import QuestionBox from "../components/QuestionBox";
import { useHistory, useParams } from "react-router-dom";

const PlayTrivia = (props) => {
  let history = useHistory();

  const params = useParams();
  const triviaId = params.triviaId;
  const [trivia, setTrivia] = useState([]);
  const [status, setStatus] = useState("pending");

  const URL = "/api/trivia/";

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading");
      const res = await fetch(URL + triviaId);
      const data = await res.json();
      setTrivia(data);
      setStatus("resolved");
    };
    fetchData();
  }, [triviaId]);

  const showQuestions = () => {
    const questions = [];
    for (let i = 0; i < trivia?.trivia_questions?.length; i++) {
      questions.push(
        <QuestionBox question={trivia.trivia_questions[i]} number={i + 1} />
      );
    }
    return questions;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = event.target;
    const answers = [];
    for (let i = 0; i < trivia.trivia_questions.length; i++) {
      if (
        data["question" + (i + 1)].value ||
        data["question" + (i + 1)].value === 0
      ) {
        answers.push(data["question" + (i + 1)].value);
      } else {
        alert("Please fill in question " + (i + 1));
      }
      if (answers.length === trivia.trivia_questions.length) {
        props.submitAnswers(answers);
        history.push(`./results`);
      }
      // console.log("number " + i, data["question" + (i + 1)].value);
    }
    // console.log(answers);
  };

  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <h1 className="text-5xl text-red-600 font-semibold my-2 mb-8">
            {trivia.title}
          </h1>
          {showQuestions()}

          <button className="w-full text-white text-2xl rounded-lg bg-red-600 py-3 mb-32">
            Submit answers
          </button>
        </form>
      </div>
    </>
  );
};

export default PlayTrivia;
