const UserDetailsButton = (props) => {
  return (
    <>
      <button className="bg-red-600 text-white text-sm rounded-lg w-full my-4 py-2 hover:bg-red-700">
        {props.text}
      </button>
    </>
  );
};

export default UserDetailsButton;
