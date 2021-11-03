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
          className="text-red-600 border-red-600 focus:ring-red-600"
        />
        <label htmlFor={index} className="ml-2">
          {category}
        </label>
      </div>
    );
  });
};

export default ShowCategories;
