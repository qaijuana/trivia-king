import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TriviaResultsPage = (props) => {
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

  // const [score, setScore] = useState();

  const compareAnswers = () => {
    let triviaScore = 0;
    const answers = props.answers;
    for (let i = 0; i < answers.length; i++) {
      if (
        parseInt(answers[i]) ===
        parseInt(trivia?.trivia_questions?.[i]?.correctAnswer)
      ) {
        triviaScore++;
      }
    }
    return triviaScore;
  };

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <div className="grid grid-cols-1">
        <h1 className="text-5xl text-red-600 font-semibold my-2 mb-8">
          {trivia.title}
        </h1>
        <div className="flex justify-center items-center gap-4">
          <h3 className="text-red-600 text-5xl">your score:</h3>
          <h2 className="text-red-600 text-9xl font-semibold">
            {compareAnswers()}/{props.answers.length}
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
