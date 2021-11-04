import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import EditTriviaInfoForm from "../components/EditTriviaInfoForm";
import EditQuestionsInputForm from "../components/EditQuestionsInputForm";

const EditTriviaPage = () => {
  const params = useParams();
  const triviaId = params.triviaId;
  let history = useHistory();

  const [trivia, setTrivia] = useState([]);
  const [status, setStatus] = useState("pending");
  const questionsNumber = trivia?.trivia_questions?.length;
  const URL = "/api/trivia/";

  const generateQuestions = (smt) => {
    // const questions = [];
    // for (let i = 0; i < questionsNumber; i++) {
    //   questions.push(
    //     <EditQuestionsInputForm
    //       index={i}
    //       key={i}
    //       question={smt.trivia_questions?.[i]}
    //     />
    //   );
    // }
    return trivia?.trivia_questions?.map((item, i) => {
      return <EditQuestionsInputForm index={i} key={i} question={item} />;
    });
    // return questions;
  };

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading");
      const res = await fetch(URL + triviaId);
      const data = await res.json();
      await setTrivia(data);
      setStatus("resolved");
    };
    fetchData();
  }, [triviaId]);
  // console.log("trivia", trivia);

  function editTrivia(e) {
    console.log(e);
    fetch(URL + triviaId, {
      method: "PUT",
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
    history.push("/");
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
      images: data.image.value,
      description: data.description.value,
      trivia_questions: allTriviaQuestions,
    };

    const dataNotFilledAlert = (area) =>
      alert(area + " not filled, please fill in all details!");

    for (const property in newTrivia) {
      if (!newTrivia[property]) {
        return dataNotFilledAlert(property);
      }
    }
    for (let i = 0; i < newTrivia.trivia_questions.length; i++) {
      if (!newTrivia.trivia_questions[i]) {
        return dataNotFilledAlert(`Question ${i + 1}`);
      } else if (
        !newTrivia.trivia_questions[i].correctAnswer &&
        newTrivia.trivia_questions[i].correctAnswer !== 0
      ) {
        return dataNotFilledAlert(`Question ${i + 1} answer`);
      }
      for (const answer of newTrivia.trivia_questions[i].choices) {
        if (!answer) {
          return dataNotFilledAlert(`Question ${i + 1} choices`);
        }
      }
    }

    editTrivia(newTrivia);
    console.log(newTrivia);
  };

  return (
    <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
          <div className="md:col-span-2 order-2 lg:order-1">
            {generateQuestions(trivia)}
          </div>
          <div className="lg:sticky lg:top-20 md:col-span-1 md:h-screen order-1 lg:order-2">
            <EditTriviaInfoForm info={trivia} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTriviaPage;
