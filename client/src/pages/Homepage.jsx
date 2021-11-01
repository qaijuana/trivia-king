import { Link } from "react-router-dom";

const Homepage = () => {
  const SectionTitle = (props) => {
    return (
      <>
        <h2 className="text-2xl font-bold text-red-600 justify-self-start mr-3">
          {props.title}
        </h2>
      </>
    );
  };
  const Jumbotron = () => {
    return (
      <>
        <div className="bg-red-600 w-full h-96 rounded-lg "></div>
      </>
    );
  };
  const SearchQuizTitle = (props) => {
    return (
      <>
        <h2 className="text-xl font-bold text-red-600 justify-self-start inline-block">
          {props.title}
        </h2>
      </>
    );
  };

  const TriviaFilter = () => {
    return (
      <div className="lg:sticky lg:top-20 lg:col-span-1 lg:h-screen">
        <div className="h-auto lg:max-h-80vh lg:overflow-y-scroll rounded-lg border-2 border-solid border-red-600 p-4">
          <div className="">
            <div>
              <SearchQuizTitle title="Categories" />
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
              <p>ITEM</p>
            </div>
            <div className="pt-3">
              <SearchQuizTitle title="Search by Tags" />
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

  const ShowFilteredTrivia = () => {
    return (
      <div className="lg:col-span-3">
        <TriviaCategorySection />
        <TriviaCategorySection />
        <TriviaCategorySection />
        <TriviaCategorySection />
        <TriviaCategorySection />
        <TriviaCategorySection />
      </div>
    );
  };

  const TriviaCategorySection = () => {
    return (
      <>
        <div className="mb-5">
          <div className="flex justify-start">
            <SectionTitle title="Category Name" />
            <SeeMoreButton />
          </div>
          {/* Show Trivias within Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <TriviaCard
              title={"Trivia Name"}
              rating={"4"}
              tags={["funny", "difficult", "200IQ"]}
            />
            <TriviaCard
              title={"Trivia Name"}
              rating={"4"}
              tags={["funny", "difficult", "200IQ"]}
            />
            <TriviaCard
              title={"Trivia Name"}
              rating={"4"}
              tags={["funny", "difficult", "200IQ"]}
            />
          </div>
        </div>
      </>
    );
  };

  const SeeMoreButton = () => {
    return (
      <>
        <button className="bg-red-600 rounded-lg text-white px-2">
          See More
        </button>
      </>
    );
  };

  const TriviaCard = (props) => {
    return (
      <>
        <div>
          <Link to="/">
            <div className="w-full h-40 bg-red-400">
              <img
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="trivia name"
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <h3 className="text-lg text-red-600 font-semibold">
                {props.title}
              </h3>
              <p className="text-sm text-red-600 font-semibold">
                Rating: {props.rating}
              </p>
            </div>
            <p className="text-sm text-red-600">Tags: {props.tags}</p>
          </Link>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1">
          <SectionTitle title="Featured" />
          <Jumbotron />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-5">
          <TriviaFilter />
          <ShowFilteredTrivia />
        </div>
      </div>
    </>
  );
};

export default Homepage;
