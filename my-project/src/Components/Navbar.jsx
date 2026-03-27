import React from "react";
import { FaSpotify, FaUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#121212] px-4 py-2 text-white sticky top-0 z-50">
      
      {/* LEFT - Logo */}
      <div className="flex items-center">
        <FaSpotify className="text-3xl text-green-500 cursor-pointer" />
      </div>

      {/* CENTER - Search */}
      <div className="hidden md:flex flex-1 justify-center px-4">
        <div className="flex items-center bg-[#242424] px-4 py-2 rounded-full w-full max-w-xl">
          <AiOutlineSearch className="text-lg text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent outline-none text-white ml-3 w-full placeholder-gray-400"
          />
        </div>
      </div>

      {/* RIGHT - Icons */}
      <div className="flex items-center gap-4">
        <AiOutlineHome className="text-2xl cursor-pointer hover:text-green-500 transition" />
        <BsCollectionPlay className="text-2xl cursor-pointer hover:text-green-500 transition" />

        {/* USER ICON PROFILE */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2a2a2a] cursor-pointer hover:bg-[#3a3a3a] transition">
          <FaUser className="text-white text-sm" />
        </div>
      </div>
    </div>
  );
}