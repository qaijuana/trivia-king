import React from "react";
import { NavLink } from "react-router-dom";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
// import { Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <nav className="bg-red-400">
        <div className="max-w-5xl mx-auto border border-black">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div className="flex">
                <NavLink to="/" className="flex items-center py-2 text-white">
                  <span>
                    <QuestionMarkCircledIcon className="mx-2" />
                  </span>
                  <span className="text-xl font-semibold">TRIVIA KING</span>
                </NavLink>
              </div>
              <div className="flex items-center space-x-3 text-md">
                <NavLink to="/" className="py-2 text-white">
                  My Quizzes
                </NavLink>
                <NavLink to="/" className="py-2 text-white">
                  New Quiz
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-3 mr-2 text-md">
              <NavLink to="/" className="py-2 text-white">
                Log In
              </NavLink>
              <NavLink to="/" className="py-2 text-white">
                Sign Up
              </NavLink>
            </div>

            {/* 
        <NavMenu>
        <NavLink to="/user/:username/myQuizzes">My Quizzes</NavLink>
        <NavLink to="/quiz/new">New Quiz</NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/login">Log In</NavBtnLink>
        </NavBtn>
        <NavBtn>
        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
      </NavBtn> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
