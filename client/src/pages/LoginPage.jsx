import React, { useState, useEffect } from "react"
import SectionTitle from "../components/SectionTitle";
import * as Separator from "@radix-ui/react-separator";
import UserDetailsInput from "../components/UserDetailsInput";
import UserDetailsButton from "../components/UserDetailsButton";
import RedirectButton from "../components/RedirectButton";

// const URL = "/api/users"

const LoginPage = () => {
  const [status, setStatus] = useState("pending");

  function handleSubmit(e) {
    e.preventDefault();
    const login = {
      username: e.target.username.value, 
      password: e.target.password.value,
    }

    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("resJson", resJson)
      })
      .catch((error) => console.error({ Error: error }))
      
  }
  console.log(status);


  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center">
          <SectionTitle title="Log into your account" />
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <UserDetailsInput label="User" type="text" name="username" />
              <UserDetailsInput label="Password" type="password" name="password" />
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
