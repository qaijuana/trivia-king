import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PersonIcon,
  QuestionMarkCircledIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
// import { Bars } from "./NavbarElements";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState("hidden");
  const toggleNav = () => {
    if (navMenu === "hidden") {
      return setNavMenu(null);
    } else {
      return setNavMenu("hidden");
    }
  };
  return (
    <>
      <nav className="bg-red-400">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="flex py-3">
                <NavLink to="/" className="flex items-center text-white ml-3">
                  <span className="text-xl font-semibold">TRIVIA</span>
                  <span>
                    <QuestionMarkCircledIcon className="w-5 h-5" />
                  </span>
                  <span className="text-xl font-semibold">KING</span>
                </NavLink>
              </div>
              <div className="hidden md:flex items-center py-3 space-x-3 text-sm">
                <NavLink to="/" className="text-white hover:text-red-700">
                  My Quizzes
                </NavLink>
                <NavLink to="/" className="text-white hover:text-red-700">
                  New Quiz
                </NavLink>
              </div>
            </div>
            <div className="hidden md:flex items-center py-3 space-x-3 mr-2 text-sm">
              <NavLink
                to="/"
                className="flex items-center text-white hover:text-red-700"
              >
                <span>Username</span>
                <span>
                  <PersonIcon className="w-5 h-5 ml-1" />
                </span>
              </NavLink>
              <NavLink to="/" className="text-white">
                <button className="rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700">
                  Log In
                </button>
              </NavLink>
              <NavLink to="/" className="text-white">
                <button className="rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700">
                  Sign Up
                </button>
              </NavLink>
            </div>
            {/* mobile button */}
            <div className="md:hidden flex items-center text-white">
              <button onClick={toggleNav}>
                <HamburgerMenuIcon className="mx-3 w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}

        <div className={navMenu + " md:hidden pb-3"}>
          <NavLink to="/" className="block py-2 px-4 text-white">
            Profile
          </NavLink>
          <NavLink to="/" className="block py-2 px-4 text-white">
            My Quizzes
          </NavLink>
          <NavLink to="/" className="block py-2 px-4 text-white">
            New Quiz
          </NavLink>
          <NavLink to="/" className="block py-2 px-4 text-white">
            Log In
          </NavLink>
          <NavLink to="/" className="block py-2 px-4 text-white">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
