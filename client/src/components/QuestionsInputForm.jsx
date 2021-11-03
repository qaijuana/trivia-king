import SectionTitle from "../components/SectionTitle";

const QuestionsInputForm = () => {
  const TriviaQuestion = (props) => {
    return (
      <div className="pt-3">
        <label htmlFor="" className="text-red-600">
          {props.label}
        </label>
        <input
          type="text"
          className="text-sm rounded-lg border-2 border-solid border-red-600 w-full my-1"
        />
      </div>
    );
  };

  const TriviaAnswer = () => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          name="correctAnswerOptions"
          className="text-red-600 border-red-600 focus:ring-red-600"
        />
        <input
          type="text"
          name="answerOptions"
          className="ml-3 my-2 flex-grow text-sm rounded-lg border-2 border-solid border-red-600"
        />
      </div>
    );
  };

  return (
    <>
      <div className="">
        <SectionTitle title="Question 1" />
        <form>
          <TriviaQuestion label="Question" />
          {/* Answers */}
          <h3 className="text-red-600 mt-3">
            Answers (select the correct answer)
          </h3>
          <TriviaAnswer />
          <TriviaAnswer />
          <TriviaAnswer />
          <TriviaAnswer />
        </form>
      </div>
    </>
  );
};

export default QuestionsInputForm;
