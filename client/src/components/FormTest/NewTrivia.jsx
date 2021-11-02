import React, { useState, useEffect } from 'react'

const URL = "/api/trivia/"

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
    )
}

export default NewTrivia;