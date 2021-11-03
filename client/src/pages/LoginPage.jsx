import SectionTitle from "../components/SectionTitle";
import * as Separator from "@radix-ui/react-separator";
import UserDetailsInput from "../components/UserDetailsInput";
import UserDetailsButton from "../components/UserDetailsButton";
import RedirectButton from "../components/RedirectButton";

const LoginPage = () => {
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
            <RedirectButton link="signup" text="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
