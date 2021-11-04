const UserDetailsInput = (props) => {
  return (
    <>
      <div className="mt-2 w-80">
        <label className="text-md text-red-600 mr-2">{props.label}:</label>
        <input
          type={props.type}
          className="border-2 border-red-600 rounded-lg w-full h-8"
          name={props.name}
        />
      </div>
    </>
  );
};

export default UserDetailsInput;
