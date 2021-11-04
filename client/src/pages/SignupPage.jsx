import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import * as Separator from "@radix-ui/react-separator";
import UserDetailsInput from "../components/UserDetailsInput";
import UserDetailsButton from "../components/UserDetailsButton";
import RedirectButton from "../components/RedirectButton";

const SignupPage = () => {
  const [status, setStatus] = useState("pending");

  function handleSubmit(e) {
    e.preventDefault();
    const signUp = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    console.log(signUp);
    const sendData = async () => {
      setStatus("Loading...")
      const res = await fetch("/api/users/new", {
        method: "POST",
        body: JSON.stringify(signUp),
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await res.json();
      console.log(data)
    }
    sendData();

  }



  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center">
          <SectionTitle title="Sign up for a new account" />
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <UserDetailsInput name="username" label="User" type="text" />
              <UserDetailsInput name="email" label="Email" type="text" />
              <UserDetailsInput name="password" label="Password" type="password" />
              <UserDetailsButton text="Create Account" />
            </form>
          </div>
          <div className="grid justify-items-center w-80">
            <Separator.Root className="bg-red-600 w-full h-0.5 mt-2" />
            <p className="text-red-600 text-sm mt-4">
              Already have an account?
            </p>
            <RedirectButton link="login" text="Log In" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
