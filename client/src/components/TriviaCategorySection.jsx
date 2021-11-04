import SectionTitle from "./SectionTitle";
import { useState } from "react";
import RenderTrivias from "./RenderTrivias";
import SeeMoreButton from "./SeeMoreButton";

const TriviaCategorySection = (props) => {
  const [showAmount, setShowAmount] = useState(3);
  const [seeMoreButtonText, setSeeMoreButtonText] = useState("See More");

  const handleSeeMore = () => {
    if (showAmount === 3) {
      setShowAmount("all");
      setSeeMoreButtonText("See Less");
    } else {
      setShowAmount(3);
      setSeeMoreButtonText("See More");
    }
  };

  return (
    <>
      <div className="mb-5">
        <div className="flex justify-start">
          <SectionTitle title={props.category} />
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
          <RenderTrivias trivia={props.trivia} showAmount={showAmount} />
        </div>
      </div>
    </>
  );
};

export default TriviaCategorySection;
