import categoryList from "../categoryList";

const TriviaInfoForm = () => {
  const TriviaInfoTextInput = (props) => {
    return (
      <div className="pt-0">
        <label htmlFor="" className="text-red-600">
          {props.label}
        </label>
        <input
          type="text"
          name={props.name}
          className="text-sm rounded-lg border-2 border-solid border-red-600 w-full my-1"
        />
      </div>
    );
  };

  const TriviaCategoryInput = (props) => {
    return (
      <div>
        <label htmlFor="categorySelect" className="text-red-600">
          {props.label}
        </label>
        <select
          name={props.name}
          id="categorySelect"
          className="text-sm text-red-600 rounded-lg border-2 border-solid border-red-600 w-full my-1"
        >
          {categoryList.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </div>
    );
  };

  return (
    <>
      <div className="h-auto md:max-h-80vh md:overflow-y-scroll rounded-lg border-2 border-solid border-red-600 p-3">
        <input
          type="text"
          className="p-0 pb-1 mb-2 text-red-600 text-2xl border-0 border-b-4 border-red-600 placeholder-red-600 placeholder-opacity-30 focus:ring-0 focus:border-red-700"
          placeholder="Trivia Name"
          name="title"
        />
        <TriviaCategoryInput label="Category" name="category" />
        <TriviaInfoTextInput label="Tags" name="tags" />
        <TriviaInfoTextInput label="Image Link" name="image" />
        <div className="pt-0">
          <label htmlFor="newQuizDescription" className="text-red-600">
            Description
          </label>
          <textarea
            name="description"
            id="newQuizDescription"
            cols="40"
            rows="4"
            className="w-full border-2 rounded-lg border-red-600"
          ></textarea>
        </div>
        <button className="block w-full my-1 bg-red-600 text-white rounded-lg py-2 mt-3 hover:bg-red-700">
          Create Quiz
        </button>
      </div>
    </>
  );
};

export default TriviaInfoForm;
