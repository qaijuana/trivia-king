import { useState } from "react";
import ShowCategories from "./ShowCategories";

const TriviaFilter = () => {
  const [categories, setCategories] = useState([]);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event.target);
  //   };

  const handleChange = (event) => {
    event.preventDefault();
    // if (isChecked === "indeterminate") {
    //   setCategories(
    //     categories.filter((item) => {
    //       return item !== title;
    //     })
    //   );
    //   categories.filter((item) => console.log(item));
    //   console.log("test", isChecked, title);
    // } else {
    //   setCategories([...categories, title]);
    //   console.log("test", isChecked, title);
    // }
    // console.log("selected", categories);
    // setCategories(selected);
    //* ==========================
    console.log("target", event.target);
    console.log("checked?", event.target.checked);
    event.target.checked
      ? setCategories([...categories, { name: event.target.value }])
      : // console.log(event.target.value)
        setCategories(
          categories.filter((item) => {
            return item.name !== event.target.value;
          })
        );
    console.log("selected", categories);
  };

  const SearchTriviaTitle = (props) => {
    return (
      <>
        <h2 className="mb-2 text-xl font-bold text-red-600 justify-self-start inline-block">
          {props.title}
        </h2>
      </>
    );
  };

  return (
    <div className="lg:sticky lg:top-20 lg:col-span-1 lg:h-screen">
      <div className="h-auto lg:max-h-80vh lg:overflow-y-scroll rounded-lg border-2 border-solid border-red-600 p-4">
        <div className="">
          <div>
            <SearchTriviaTitle title="Categories" />

            <ShowCategories
              categories={categories}
              handleChange={handleChange}
            />
            {/* <input type="submit" value="submit" /> */}
          </div>
          <div className="pt-3">
            <SearchTriviaTitle title="Search by Tags" />
            <input
              type="text"
              className="rounded-lg border-2 border-solid border-red-600 w-full my-2"
            />
            <button className="block w-full bg-red-600 text-white rounded-lg py-1">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaFilter;
