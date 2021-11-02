import categoryList from "../categoryList";

const ShowCategories = (props) => {
  return categoryList.map((category, index) => {
    return (
      <div key={index} className="flex items-center text-red-600 py-1">
        <input
          id={index}
          type="checkbox"
          onChange={props.handleChange}
          name="category"
          value={category}
        />
        <label htmlFor={index}>{category}</label>
      </div>
    );
  });
};

export default ShowCategories;
