import TriviaInfoForm from "../components/TriviaInfoForm";
import QuestionsInputForm from "../components/QuestionsInputForm";

const NewquizPage = () => {
  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
        <div className="md:col-span-2 order-2 lg:order-1">
          <QuestionsInputForm />
        </div>
        <div className="md:sticky md:top-20 md:col-span-1 md:h-screen order-1 lg:order-2">
          <TriviaInfoForm />
        </div>
      </div>
    </div>
  );
};

export default NewquizPage;
