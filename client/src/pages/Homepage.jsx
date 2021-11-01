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
  return (
    <>
      <div className="max-w-2xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1">
          <SectionTitle title="Featured" />
          <Jumbotron />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-5">
          <div className="md:col-span-1 rounded-lg border-2 border-solid border-red-600 p-4">
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
          <div className="md:col-span-3">
            {/* Show all/filtered Trivias */}
            <div>
              <div className="flex justify-start">
                <SectionTitle title="Category Name" />
                <button className="bg-red-600 rounded-lg text-white px-2">
                  See More
                </button>
              </div>
              {/* Show Trivias within Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                <div>
                  <div className="w-full h-40 bg-red-400 rounded-lg">Image</div>
                  <p>Triva name</p>
                  <p>Triva details</p>
                </div>
                <div>
                  <div className="w-full h-40 bg-red-400 rounded-lg">Image</div>
                  <p>Triva name</p>
                  <p>Triva details</p>
                </div>
                <div>
                  <div className="w-full h-40 bg-red-400 rounded-lg">Image</div>
                  <p>Triva name</p>
                  <p>Triva details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
