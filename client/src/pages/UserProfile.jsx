import SectionTitle from "../components/SectionTitle";
import TriviaCard from "../components/TriviaCard";
import trivias from "../fakeData";

const UserProfile = (props) => {
  const user = props.user
  const username = user.username;
  const email = user.email
  console.log(user, username, email)

  const UserInfoForm = () => {
    const UserInfoTextInput = (props) => {
      return (
        <div className="pt-0">
          <label htmlFor="" className="text-red-600">
            {props.label}
          </label>
          <input
            type="text"
            name={props.name}
            className="text-sm rounded-lg border-2 border-solid border-red-600 w-full my-1"
          />
        </div>
      );
    };

    return (
      <>
        <div className="h-auto md:max-h-80vh md:overflow-y-scroll rounded-lg border-2 border-solid border-red-600 p-3">
          <UserInfoTextInput label="Username" name="username" />
          <UserInfoTextInput label="Password" name="password" />
          <UserInfoTextInput label="Email" name="email" />

          <button className="block w-full my-1 bg-red-600 text-white rounded-lg py-2 mt-3 hover:bg-red-700">
            Change Details
          </button>
        </div>
      </>
    );
  };

  //   fetch user created trivias

  const myTrivias = trivias;

  const RenderMyTrivias = () => {
    return myTrivias.map((trivia, index) => {
      return (
        <TriviaCard
          id={index}
          title={trivia.title}
          image={trivia.image}
          likes={trivia.likes}
          category={trivia.category}
          tags={trivia.tags}
        />
      );
    });
  };

  
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1 justity-items-start">
          <div className="flex justify-between">
            <SectionTitle title={username} />
          </div>
          <div className="pb-3 pt-2"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5">
            <div className="md:col-span-2 order-2 lg:order-1">
              <p className="text-red-600 text-lg">
                Email:{" "}
                <span className="font-semibold">{email}</span>
              </p>
              <div className="mt-10">
                <SectionTitle title="My Trivia" />
                <div className="sm:p-0 sm:border-0 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 p-3 rounded-lg border-2 border-red-600">
                  <RenderMyTrivias />
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-20 md:col-span-1 md:h-screen order-1 lg:order-2">
              <UserInfoForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
