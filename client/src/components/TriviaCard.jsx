import { Link } from "react-router-dom";

const TriviaCard = (props) => {
  const showTags = () => {
    return props.tags.map((tag) => " " + tag).toString();
  };

  return (
    <>
      <div className={props.className}>
        <Link to="/">
          <div className="w-full h-40 bg-red-400">
            <img
              src={props.image}
              alt="trivia name"
              className="w-full h-full object-center object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-lg text-red-600 font-semibold">
              {props.title}
            </h3>
            <p className="text-sm text-red-600 font-semibold">
              Likes: {props.likes}
            </p>
          </div>
          <p className="text-sm text-red-600">Tags:{showTags()}</p>
        </Link>
      </div>
    </>
  );
};

export default TriviaCard;
