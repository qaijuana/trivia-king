import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

const ViewTrivia = () => {
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

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <div className="grid grid-cols-1">
        {/* Name and start quiz button */}
        <div className="grid grid-cols-2 justity-between">
          <SectionTitle title={trivia.title} />
          <div className="justify-self-end">
            <Link to={`/trivia/${triviaId}/play`}>
              <button className="bg-red-600 rounded-lg text-white px-3 ml-2 py-2">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
        {/* Quiz details */}
        <div className="pb-3 pt-2">
          <p className="text-red-600 text-lg">
            Category: <span className="font-semibold">{trivia.category}</span>
          </p>
          <p className="text-red-600 text-lg">
            Tags:{" "}
            <span className="font-semibold">{trivia?.tags?.join(", ")}</span>
          </p>
        </div>
        <img src={trivia.images} alt="" />
        <div className="pb-3 pt-3">
          <p className="text-red-600 text-lg">Description:</p>
          <p className="text-red-600 text-md pt-2">{trivia.description}</p>
        </div>
        <p className="text-red-600 text-lg">
          Author: <span className="font-semibold">{trivia.author}</span>
        </p>
      </div>
    </div>
  );
};

export default ViewTrivia;
