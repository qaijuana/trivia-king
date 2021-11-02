const SeeMoreButton = (props) => {
  return (
    <>
      <button
        onClick={() => props.onClick()}
        className="bg-red-600 rounded-lg text-white px-2 ml-2"
      >
        {props.text}
      </button>
    </>
  );
};

export default SeeMoreButton;
