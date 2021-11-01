import React, { useState, useEffect } from 'react'


const URL = "/api/trivia/"

const Sform = () => {

    const [trivia, setTrivia] = useState([]);
    const [status, setStatus] = useState("pending");

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
    console.log(trivia);


    return (
        <div>
            

        </div>
    )
}

export default Sform
