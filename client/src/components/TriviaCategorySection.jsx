import SectionTitle from "./SectionTitle";
import TriviaCard from "./TriviaCard";
import { useState } from "react";
import trivias from "../fakeData.js";

const TriviaCategorySection = () => {
  const [showAmount, setShowAmount] = useState(3);
  const [seeMoreButtonText, setSeeMoreButtonText] = useState("See More");

  const SeeMoreButton = (props) => {
    return (
      <>
        <button
          onClick={() => props.onClick()}
          className="bg-red-600 rounded-lg text-white px-2"
        >
          {props.text}
        </button>
      </>
    );
  };

  const handleSeeMore = () => {
    if (showAmount === 3) {
      setShowAmount("all");
      setSeeMoreButtonText("See Less");
    } else {
      setShowAmount(3);
      setSeeMoreButtonText("See More");
    }
  };

  const RenderTrivias = (props) => {
    return trivias.map((trivia, index) => {
      if (props.showAmount === "all") {
        return (
          <TriviaCard
            id=""
            title={trivia.title}
            image={trivia.image}
            likes={trivia.likes}
            tags={trivia.tags}
          />
        );
      } else if (index < props.showAmount) {
        return (
          <TriviaCard
            id=""
            title={trivia.title}
            image={trivia.image}
            likes={trivia.likes}
            tags={trivia.tags}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="mb-5">
        <div className="flex justify-start">
          <SectionTitle title="Category Name" />
          <SeeMoreButton onClick={handleSeeMore} text={seeMoreButtonText} />
        </div>
        {/* Show Trivias within Category */}
        <div
          className={
            (showAmount === 3
              ? "sm:p-0 sm:border-0"
              : "sm:p-3 sm:overflow-y-auto sm:rounded-lg sm:border-2 sm:border-red-600") +
            " grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 h-auto max-h-96 p-3 overflow-y-auto rounded-lg border-2 border-red-600 transition-all duration-500"
          }
        >
          <RenderTrivias showAmount={showAmount} />
        </div>
      </div>
    </>
  );
};

export default TriviaCategorySection;
