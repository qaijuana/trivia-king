const QuestionBox = (props) => {
  const currentQuestion = props.question;

  const QuestionNumber = (props) => {
    return (
      <>
        <h2 className="text-4xl font-semibold text-red-600">
          Question {props.number}
        </h2>
      </>
    );
  };

  const QuestionName = (props) => {
    return (
      <>
        <h3 className="text-2xl text-red-600 pt-4">{props.question}</h3>
      </>
    );
  };
  const ChoicesBox = (props) => {
    const choices = props.choices;

    const Choice = (props) => {
      return (
        <>
          <label
            htmlFor={"question" + props.questionNumber + "choice" + props.id}
          >
            <input
              type="radio"
              name={"question" + props.questionNumber}
              id={"question" + props.questionNumber + "choice" + props.id}
              className="hidden"
              value={props.id}
            />
            <div className="label-checked:bg-red-600 label-checked:text-white border-2 rounded-lg border-red-600 text-center text-red-600 text-2xl py-4 my-2 md:m-2 cursor-pointer">
              {props.info}
            </div>
          </label>
        </>
      );
    };

    const showChoices = () => {
      const allChoices = [];
      for (let i = 0; i < choices.length; i++) {
        allChoices.push(
          <Choice
            info={choices[i]}
            id={i}
            questionNumber={props.questionNumber}
          />
        );
      }

      return allChoices;
    };

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          {showChoices()}
        </div>
      </>
    );
  };

  return (
    <div className="grid grid-cols-1 mb-20">
      <QuestionNumber number={props.number} />
      <QuestionName question={currentQuestion.question} />
      <ChoicesBox
        choices={currentQuestion.choices}
        questionNumber={props.number}
      />
    </div>
  );
};

export default QuestionBox;
