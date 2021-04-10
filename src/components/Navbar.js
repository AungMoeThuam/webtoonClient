import React from "react";
import * as SI from "react-icons/si";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex h-16 justify-between border-b-2 shadow  text-red-700 pl-4 pr-4">
      <div className=" text-2xl font-bold flex  justify-center items-center">
        <SI.SiStorybook className="" />
        <h1>StoryWorld</h1>
      </div>
      <div className="hidden md:flex justify-center items-center font-bold">
        <ul className="flex ">
          <Link to="/">
            <li className="p-3"> Home</li>
          </Link>
          <Link to="/story">
            <li className="p-3"> Story</li>
          </Link>
          <Link to="/contact">
            <li className="p-3"> Contact</li>
          </Link>
          <Link to="/about">
            <li className="p-3"> About</li>
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex justify-center items-center ">
        <button className="p-3 border rounded-xl w-20 font-mono font-bold text-white  bg-red-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
