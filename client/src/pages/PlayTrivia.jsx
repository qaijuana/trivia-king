const PlayTrivia = () => {
  const QuestionNumber = () => {
    return (
      <>
        <h2 className="text-4xl font-semibold text-red-600">Question 1</h2>
      </>
    );
  };
  const QuestionName = () => {
    return (
      <>
        <h3 className="text-2xl text-red-600 pt-4">
          What is the largest animal on the planet?
        </h3>
      </>
    );
  };
  const ChoicesBox = () => {
    const Choice = (props) => {
      return (
        <>
          <label htmlFor={props.id} className="">
            <input type="radio" name="qn1" id={props.id} className="hidden" />
            <div className="label-checked:bg-red-600 label-checked:text-white border-2 rounded-lg border-red-600 text-center text-red-600 text-2xl py-4 my-2 md:m-2 cursor-pointer">
              {props.id}
            </div>
          </label>
        </>
      );
    };

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <Choice id="1" />
          <Choice id="2" />
          <Choice id="3" />
          <Choice id="4" />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1">
          <QuestionNumber />
          <QuestionName />
        </div>
        <ChoicesBox />
      </div>
    </>
  );
};

export default PlayTrivia;
