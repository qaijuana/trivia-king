import { useEffect, useState } from "react";
import TriviaInfoForm from "../components/TriviaInfoForm";
import QuestionsInputForm from "../components/QuestionsInputForm";

const NewquizPage = () => {
  // const [questions, setQuestions] = useState([]);

  // const handleQuestions = (event) => {
  //   event.target.value;
  //   setQuestions([...questions, {}]);
  // };
  const [trivia, setTrivia] = useState([]);
  const [status, setStatus] = useState("pending");
  const questionsNumber = 3;

  const generateQuestions = () => {
    const questions = [];
    for (let i = 0; i < questionsNumber; i++) {
      questions.push(<QuestionsInputForm index={i} />);
    }
    return questions;
  };

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading");
      const res = await fetch(URL);
      const data = await res.json();
      setTrivia(data);
      setStatus("resolved");
    };
    fetchData();
  }, []);
  console.log("trivia", trivia);

  function createTrivia(e) {
    console.log(e);
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("resJson", resJson);
      })
      .catch((error) => console.error({ Error: error }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const data = event.target;

    const allTriviaQuestions = [];
    const createTriviaQuestion = (num) => {
      return {
        question: data["question" + num].value,
        choices: [
          data["question" + num + "choice0"].value,
          data["question" + num + "choice1"].value,
          data["question" + num + "choice2"].value,
          data["question" + num + "choice3"].value,
        ],
        correctAnswer: parseInt(
          data["question" + num + "correctAnswerOptions"].value
        ),
      };
    };
    for (let i = 0; i < questionsNumber; i++) {
      allTriviaQuestions.push(createTriviaQuestion(i));
    }

    const newTrivia = {
      title: data.title.value,
      category: data.category.value,
      tags: data.tags.value.split(", "),
      image: data.image.value,
      description: data.description.value,
      trivia_question: allTriviaQuestions,
    };

    const dataNotFilledAlert = (area) =>
      alert(area + " not filled, please fill in all details!");

    for (const property in newTrivia) {
      if (!newTrivia[property]) {
        return dataNotFilledAlert(property);
      }
    }
    for (const question of newTrivia.trivia_question) {
      if (!question.question || !question.correctAnswer) {
        return dataNotFilledAlert(
          `${question.question}${question.correctAnswer}`
        );
      }
      for (const answer of question.choices) {
        if (!answer) {
          return dataNotFilledAlert(answer);
        }
      }
    }

    createTrivia(newTrivia);

    console.log(newTrivia);
  };

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
          <div className="md:col-span-2 order-2 lg:order-1">
            {generateQuestions()}
          </div>
          <div className="md:sticky md:top-20 md:col-span-1 md:h-screen order-1 lg:order-2">
            {<TriviaInfoForm />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewquizPage;
