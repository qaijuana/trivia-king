import TriviaCard from "./TriviaCard";
// import trivias from "../fakeData.js";

const RenderTrivias = (props) => {
  const trivias = props.trivia;

  return trivias.map((trivia, index) => {
    if (props.showAmount === "all") {
      return (
        <TriviaCard
          id={trivia._id}
          title={trivia.title}
          image={trivia.images}
          likes={trivia.likes}
          tags={trivia.tags}
        />
      );
    } else if (index < props.showAmount) {
      return (
        <TriviaCard
          id={trivia._id}
          title={trivia.title}
          image={trivia.images}
          likes={trivia.likes}
          tags={trivia.tags}
        />
      );
    } else {
      return null;
    }
  });
};

export default RenderTrivias;
