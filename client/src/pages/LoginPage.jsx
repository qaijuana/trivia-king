import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import * as Separator from "@radix-ui/react-separator";

const LoginPage = () => {
  const UserDetailsInput = (props) => {
    return (
      <>
        <div className="mt-2 w-80">
          <label htmlFor="" className="text-md text-red-600 mr-2">
            {props.label}:
          </label>
          <input
            id=""
            type={props.type}
            className="border-2 border-red-600 rounded-lg w-full h-8"
          />
        </div>
      </>
    );
  };

  const UserDetailsButton = (props) => {
    return (
      <>
        <button className="bg-red-600 text-white text-sm rounded-lg w-full my-4 py-2 hover:bg-red-700">
          {props.text}
        </button>
      </>
    );
  };

  const RedirectButton = (props) => {
    return (
      <>
        <Link to={"/" + props.link} className="w-full">
          <button className="bg-red-600 text-white text-sm rounded-lg w-full my-4 py-2 hover:bg-red-700">
            {props.link}
          </button>
        </Link>
      </>
    );
  };

  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center">
          <SectionTitle title="Log into your account" />
          <div className="mt-4">
            <form action="">
              <UserDetailsInput label="User" type="text" />
              <UserDetailsInput label="Password" type="password" />
              <UserDetailsButton text="Log in" />
            </form>
          </div>
          <div className="grid justify-items-center w-80">
            <Separator.Root className="bg-red-600 w-full h-0.5 mt-2" />
            <p className="text-red-600 text-sm mt-4">Don't have an account?</p>
            <RedirectButton link="signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
