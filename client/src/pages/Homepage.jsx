import { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import Jumbotron from "../components/Jumbotron";
import TriviaFilter from "../components/TriviaFilter";
import ShowFilteredTrivia from "../components/ShowFilteredTrivia";

const Homepage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [trivia, setTrivia] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading");
      const res = await fetch("/api/trivia");
      const data = await res.json();
      setTrivia(data);
      setStatus("resolved");
    }
    fetchData();
  }, [])

  const handleChange = async (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, event.target.value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => {
          return item !== event.target.value;
        })
      );
    }
    await console.log("all selected", selectedCategories);
  };

  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1 justity-items-start">
          <SectionTitle title="Featured" />
          <Jumbotron />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-5">
          <TriviaFilter handleChange={handleChange} />
          <ShowFilteredTrivia trivia={trivia} selectedCategories={selectedCategories} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
