import TriviaCategorySection from "./TriviaCategorySection";
import categoryList from "../categoryList";

const ShowFilteredTrivia = (props) => {
  const showSelected = () => {
    if (props.selectedCategories.length === 0) {
      return categoryList.map((item) => {
        return <TriviaCategorySection category={item} />;
      });
    } else {
      return props.selectedCategories.map((item) => {
        return <TriviaCategorySection category={item} />;
      });
    }
  };

  return <div className="lg:col-span-3">{showSelected()}</div>;
};

export default ShowFilteredTrivia;
