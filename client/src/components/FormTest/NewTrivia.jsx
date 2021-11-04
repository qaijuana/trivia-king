import React, { useState, useEffect } from "react";

const URL = "/api/trivia/";

const NewTrivia = () => {
  const [trivia, setTrivia] = useState([]);
  const [status, setStatus] = useState("pending");
  const [trivia_question, setTrivia_question] = useState([]);

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

  function handleSubmit(e) {
    e.preventDefault();
    const dataNotFilledAlert = (area) =>
      alert("Please fill in all details! " + area);
    const data = e.target;
    const newTrivia = {
      title: data.title.value,
      description: data.description.value,
      category: data.category.value,
      tags: data.tags.value.split(","),
      trivia_question: trivia_question,
    };
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
    console.log("new trivia", newTrivia);
  }

  function handleQuestion(e) {
    e.preventDefault();
    const data = e.target;

    let correctAnswer = null;
    if (data.answer[0].checked) {
      correctAnswer = data.choice_1.value;
      data.answer[0].checked = false;
    } else if (data.answer[1].checked) {
      correctAnswer = data.choice_2.value;
      data.answer[1].checked = false;
    } else if (data.answer[2].checked) {
      correctAnswer = data.choice_3.value;
      data.answer[2].checked = false;
    } else if (data.answer[3].checked) {
      correctAnswer = data.choice_4.value;
      data.answer[3].checked = false;
    }

    setTrivia_question([
      ...trivia_question,
      {
        question: data.question.value,
        choices: [
          data.choice_1.value,
          data.choice_2.value,
          data.choice_3.value,
          data.choice_4.value,
        ],
        correctAnswer: correctAnswer,
      },
    ]);


    data.question.value = "";
    data.choice_1.value = "";
    data.choice_2.value = "";
    data.choice_3.value = "";
    data.choice_4.value = "";
  }

    return (

        <div className="container">

            {
                ////////////////////////
                //! FORMS FOR TRIVIA W/O QUESTIONS
                ////////////////////////
            }

            <div class="form-container">
                <form onSubmit={handleSubmit}>

                    <input type="text" name="title" placeholder="title" className="border border-black-600" />
                    <br />
                    <input type="textarea" name="description" placeholder="description" className="border border-black-600" />
                    <br />
                    <input type="text" name="images" placeholder="images" className="border border-black-600" />
                    <br />
                    <input type="text" name="category" placeholder="category" className="border border-black-600" />
                    <br />
                    <input type="text" name="tags" placeholder="tag" className="border border-black-600" />
                    <br />
                    <button>Add</button>
                </form>

                {
                ////////////////////////////
                //! FORMS FOR QUESTIONS
                /////////////////////////////
                }


                <form onSubmit={handleQuestion}>
                    <label htmlFor="question">Question</label>
                    <br />
                    <input type="text" name="question" className="border border-black-600" />
                    <br />

                    <input type="radio" name="answer" className="border border-black-600 form-radio" />
                    <label htmlFor="answer">
                        <input type="text" name="choice_1" className="border border-black-600" placeholder="Choice 1" />
                    </label>
                    <br />
                    <input type="radio" name="answer" className="border border-black-600 form-radio" />
                    <label htmlFor="answer">
                        <input type="text" name="choice_2" className="border border-black-600" placeholder="Choice 2" />
                    </label>
                    <br />
                    <input type="radio" name="answer" className="border border-black-600 form-radio" />
                    <label htmlFor="answer">
                        <input type="text" name="choice_3" className="border border-black-600" placeholder="Choice 3" />
                    </label>
                    <br />
                    <input type="radio" name="answer" className="border border-black-600 form-radio" />
                    <label htmlFor="answer">
                        <input type="text" name="choice_4" className="border border-black-600" placeholder="Choice 4" />
                    </label>
                    <br />
                    <input type="submit" value="Add Question" />

                </form>
            </div>


            {
                /////////////////////////
                //! DISPLAY QUESTIONS ADDED
                /////////////////////////
            }
            <ul>
                {trivia_question.map((e, i) => {
                    return (
                        <li>
                            <h1>{e.question}</h1>
                            <img src={e.images} alt="" />
                            <ul>
                                {e.choices.map( (event) => {
                                    return(
                                        <li>{event}</li>
                                    )
                                })}
                            </ul>

                        </li>
                    )
                })}
            </ul>

  {/* return (
    <div className="container">
      {
        ////////////////////////
        //! FORMS FOR TRIVIA W/O QUESTIONS
        ////////////////////////
      }

      <div class="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="border border-black-600"
          />
          <br />
          <input
            type="textarea"
            name="description"
            placeholder="description"
            className="border border-black-600"
          />
          <br />
          <input
            type="text"
            name="images"
            placeholder="images"
            className="border border-black-600"
          />
          <br />
          <input
            type="text"
            name="category"
            placeholder="category"
            className="border border-black-600"
          />
          <br />
          <input
            type="text"
            name="tags"
            placeholder="tag"
            className="border border-black-600"
          />
          <br />
          <button>Add</button>
        </form>

        {
          ////////////////////////////
          //! FORMS FOR QUESTIONS
          /////////////////////////////
        }

        <form onSubmit={handleQuestion}>
          <label for="question">Question</label>
          <br />
          <input
            type="text"
            name="question"
            className="border border-black-600"
          />
          <br />

          <input
            type="radio"
            name="answer"
            className="border border-black-600 form-radio"
          />
          <label for="answer">
            <input
              type="text"
              name="choice_1"
              className="border border-black-600"
              placeholder="Choice 1"
            />
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            className="border border-black-600 form-radio"
          />
          <label for="answer">
            <input
              type="text"
              name="choice_2"
              className="border border-black-600"
              placeholder="Choice 2"
            />
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            className="border border-black-600 form-radio"
          />
          <label for="answer">
            <input
              type="text"
              name="choice_3"
              className="border border-black-600"
              placeholder="Choice 3"
            />
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            className="border border-black-600 form-radio"
          />
          <label for="answer">
            <input
              type="text"
              name="choice_4"
              className="border border-black-600"
              placeholder="Choice 4"
            />
          </label>
          <br />
          <input type="submit" value="Add Question" />
        </form>
      </div>

      {
        /////////////////////////
        //! DISPLAY QUESTIONS ADDED
        /////////////////////////
      }
      <ul>
        {trivia_question.map((e, i) => {
          return (
            <li>
              <h1>{e.question}</h1>
              <img src={e.images} alt="" />
              <ul>
                {e.choices.map((event) => {
                  return <li>{event}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default NewTrivia;
