import { faBolt, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CircleProgressBar from "./CircleProgressBar";
import Profile from "../Shared Component/Profile";

const Navbar = ({ setSearchQuery }) => {
  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4  relative">
      {/* Container */}
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-3 justify-between">
        {/* Left section */}
        <div className="left flex gap-5 items-center">
          {/* Logo */}
          <div className="logo bg-black text-white font-extrabold h-10 w-10 rounded-full flex justify-center items-center text-3xl">B</div>
          {/* Title */}
          <p className="capitalize md:text-3xl text-xl font-bold ">project Dashboard</p>
        </div>
        {/* Right section */}
        <div className="right grid md:grid-cols-6 grid-cols-1 justify-between items-center gap-5">
          {/* Search input */}
          <div className="border p-2 col-span-3 rounded flex gap-3 items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-300 " />
            <input onChange={handleSearch} type="search" name="search" id="" className="outline-0 w-full" placeholder="Search my storyboards" />
          </div>
          {/* Quick Start With Progress */}
          <div className="quick-start border outline-0 rounded font-bold px-4 py-2 bg-[#EAF5FB] flex justify-center items-center gap-3 col-span-2">
            <CircleProgressBar progress={4} /><span>Quick Start</span>
          </div>
          {/* Profile Component from Shared Component */}
          <Profile profile={'A'} />
        </div>
      </div>
      {/* Side Power Icon */}
      <div className="side-power bg-black w-14 h-14 rounded-l-full flex justify-center items-center absolute right-0 lg:top-0 top-2 lg:bottom-0 my-auto">
        <FontAwesomeIcon icon={faBolt} className="text-white text-xl " />
      </div>
    </div>
  );
};

export default Navbar;
