import { useRef } from "react";
import SectionTitle from "../components/SectionTitle";

const EditQuestionsInputForm = (props) => {
  const question = props.question;
  const correctAnswer = question.correctAnswer;

  const inputRefQuestionName = useRef();
  const inputRefChoice0 = useRef();
  const inputRefChoice1 = useRef();
  const inputRefChoice2 = useRef();
  const inputRefChoice3 = useRef();

  return (
    <>
      <div className="mb-5">
        <SectionTitle title={"Question " + (props.index + 1)} />
        <div className="pt-3">
          <label htmlFor="" className="text-red-600">
            Question
          </label>
          <input
            type="text"
            name={"question" + props.index}
            className="text-sm rounded-lg border-2 border-solid border-red-600 w-full my-1"
            defaultValue={question.question}
            ref={inputRefQuestionName}
          />
        </div>
        {/* Answers */}
        <h3 className="text-red-600 mt-3">
          Answers (select the correct answer)
        </h3>
        {/* Ans 0 */}
        <div className="flex items-center">
          <input
            type="radio"
            name={"question" + props.index + "correctAnswerOptions"}
            className="text-red-600 border-red-600 focus:ring-red-600"
            value="0"
            defaultChecked={correctAnswer === 0 ? true : false}
          />
          <input
            type="text"
            name={"question" + props.index + "choice0"}
            className="ml-3 my-2 flex-grow text-sm rounded-lg border-2 border-solid border-red-600"
            defaultValue={question.choices[0]}
            ref={inputRefChoice0}
          />
        </div>
        {/* Ans 1 */}
        <div className="flex items-center">
          <input
            type="radio"
            name={"question" + props.index + "correctAnswerOptions"}
            className="text-red-600 border-red-600 focus:ring-red-600"
            value="1"
            defaultChecked={correctAnswer === 1 ? true : false}
          />
          <input
            type="text"
            name={"question" + props.index + "choice1"}
            className="ml-3 my-2 flex-grow text-sm rounded-lg border-2 border-solid border-red-600"
            defaultValue={question.choices[1]}
            ref={inputRefChoice1}
          />
        </div>
        {/* Ans 2 */}
        <div className="flex items-center">
          <input
            type="radio"
            name={"question" + props.index + "correctAnswerOptions"}
            className="text-red-600 border-red-600 focus:ring-red-600"
            value="2"
            defaultChecked={correctAnswer === 2 ? true : false}
          />
          <input
            type="text"
            name={"question" + props.index + "choice2"}
            className="ml-3 my-2 flex-grow text-sm rounded-lg border-2 border-solid border-red-600"
            defaultValue={question.choices[2]}
            ref={inputRefChoice2}
          />
        </div>
        {/* Ans 3 */}
        <div className="flex items-center">
          <input
            type="radio"
            name={"question" + props.index + "correctAnswerOptions"}
            className="text-red-600 border-red-600 focus:ring-red-600"
            value="3"
            defaultChecked={correctAnswer === 3 ? true : false}
          />
          <input
            type="text"
            name={"question" + props.index + "choice3"}
            className="ml-3 my-2 flex-grow text-sm rounded-lg border-2 border-solid border-red-600"
            defaultValue={question.choices[3]}
            ref={inputRefChoice3}
          />
        </div>
      </div>
    </>
  );
};

export default EditQuestionsInputForm;
