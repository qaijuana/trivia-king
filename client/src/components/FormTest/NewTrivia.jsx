import React, { useState, useEffect } from "react";

const URL = "/api/trivia/";

const NewTrivia = () => {
  // const [trivia, setTrivia] = useState([]);
  // const [status, setStatus] = useState("pending");


  // useEffect(() => {
  //     const fetchData = async () => {
  //         setStatus("Loading");
  //         const res = await fetch(URL);
  //         const data = await res.json();
  //         setTrivia(data);
  //         setStatus("resolved");
  //     };
  //     fetchData();

  // }, [])
  // console.log(trivia);

  // function handleSubmit(e) {
  //     e.preventDefault();
  //     const data = e.target;
  //     const newTrivia = {
  //         title: data.title,
  //         description: data.description,
  //         category: data.category,
  //         tags: [data.tags],
  //     }
  // }
  // function handleQuestion(e) {
  //     e.preventDefault();
  //     const data = e.target
  //     const trivia_question = [{
  //         question: data.questions,
  //         choices: []
  //     }]
  // }

  return (
    <div className="container">
      <h1>Hello!</h1>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" />
          <input type="textarea" name="description" />
          <input type="text" name="category" />
          <input type="text" name="tags" />

    const [trivia, setTrivia] = useState([]);
    const [status, setStatus] = useState("pending");
    const [triviaQ, setTriviaQ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setStatus("Loading");
            const res = await fetch(URL);
            const data = await res.json();
            setTrivia(data);
            setStatus("resolved");
        };
        fetchData();

    }, [])

    function createTrivia(e) {
        console.log(e)
        fetch("/trivia", {
            method: "POST",
            body: JSON.stringify(e),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson)  
        })
        .catch((error) => console.error({Error: error}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("hello")
        const data = e.target;
        const newTrivia = {
            title: data.title,
            description: data.description,
            category: data.category,
            tags: [data.tags],
        }
        createTrivia(newTrivia)
    }

    function handleQuestion(e) {
        e.preventDefault();
        const data = e.target;
        console.log(data)
        let correctAnswer = null;
        if (data.answer_1.value === "on") {
            correctAnswer = data.choice_1.value;
        } else if (data.answer_2.value === "on") {
            correctAnswer = data.choice_2.value;
        } else if (data.answer_3.value === "on") {
            correctAnswer = data.choice_3.value;
        } else if (data.answer_4.value === "on") {
            correctAnswer = data.choice_4.value;
        }
        const trivia_question = [{
            question: data.question.value,
            choices: [data.choice_1.value, data.choice_2.value, data.choice_3.value, data.choice_4.value],
            correctAnswer: correctAnswer
        }]
        console.log(trivia_question)
    }

          <input type="text" name="question" />
          <input type="radio" name="answer_1">
            <input type="text" name="choice_1" />
          </input>
          <input type="radio" name="answer_2">
            <input type="text" name="choice_2" />
          </input>
          <input type="radio" name="answer_3">
            <input type="text" name="choice_3" />
          </input>
          <input type="radio" name="answer_4">
            <input type="text" name="choice_4" />
          </input>
        </form>
      </div>
    </div>
  );
};


export default NewTrivia;
// =======
//     return (

//         <div className="container">
//             <h1>Hello!</h1>

//             <div class="container">
//                 <form onSubmit={handleSubmit}>

//                     <input type="text" name="title" placeholder="title" className="border border-black-600" />
//                     <br />
//                     <input type="textarea" name="description" placeholder="description" className="border border-black-600" />
//                     <br />
//                     <input type="text" name="category" placeholder="category" className="border border-black-600" />
//                     <br />
//                     <input type="text" name="tags" placeholder="tag" className="border border-black-600" />
//                     <br />
//                     <input type="text" name="question" placeholder="question" className="border border-black-600" />
//                     <br />
//                     <button>Add</button>
//                 </form>

//                 <form onSubmit={handleQuestion}>
//                     <label for="question">Question</label>
//                     <input type="text" name="question" className="border border-black-600"/>
//                     <br />

//                     <input type="radio" name="answer_1" className="border border-black-600 form-radio"/>
//                     <label for="answer_1">
//                         <label for="choice_1">Choice 1</label>
//                         <input type="text" name="choice_1" className="border border-black-600"/>
//                     </label>
//                     <br />
//                     <input type="radio" name="answer_2" className="border border-black-600 form-radio"/>
//                     <label for="answer_2">
//                         <label for="choice_2">Choice 2</label>
//                         <input type="text" name="choice_2" className="border border-black-600"/>
//                     </label>
//                     <br />
//                     <input type="radio" name="answer_3" className="border border-black-600 form-radio"/>
//                     <label for="answer_3">
//                         <label for="choice_3">Choice 3</label>
//                         <input type="text" name="choice_3" className="border border-black-600"/>
//                     </label>
//                     <br />
//                     <input type="radio" name="answer_4" className="border border-black-600 form-radio"/>
//                     <label for="answer_4">
//                         <label for="choice_4">Choice 4</label>
//                         <input type="text" name="choice_4" className="border border-black-600"/>
//                     </label>
//                     <br />
//                     <input type="submit" value="Add Question"/>

//                 </form>
//             </div>


//         </div>
//     )
// }

// export default NewTrivia;

