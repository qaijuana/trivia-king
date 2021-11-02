import { Link } from "react-router-dom";

const RedirectButton = (props) => {
  return (
    <>
      <Link to={"/" + props.link} className="w-full">
        <button className="bg-red-600 text-white text-sm rounded-lg w-full my-4 py-2 hover:bg-red-700">
          {props.link}
        </button>
      </Link>
    </>
  );
};

export default RedirectButton;
