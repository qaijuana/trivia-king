import SectionTitle from "../components/SectionTitle";
import Jumbotron from "../components/Jumbotron";
import TriviaFilter from "../components/TriviaFilter";
import ShowFilteredTrivia from "../components/ShowFilteredTrivia";

const Homepage = () => {
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1">
          <SectionTitle title="Featured" />
          <Jumbotron />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-5">
          <TriviaFilter />
          <ShowFilteredTrivia />
        </div>
      </div>
    </>
  );
};

export default Homepage;
