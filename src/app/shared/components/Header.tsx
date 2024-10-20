"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

export const Header = () => {
  const [mode, setMode] = useState("light");

  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-400 ">
      <div className="flex gap-4 items-center justify-center">
        <div className="p-2 rounded-full border-1 bg-gray-200 items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:text-gray-900 hover:border-gray-400 text-gray-500 cursor-pointer ">
          <IoIosArrowBack className="text-2xl cursor-pointer" />
        </div>
        <div className="flex rounded-full p-[2px] border-2 bg-gray-200 items-center hover:bg-gray-300 transition-all duration-300 hover:text-gray-900 hover:border-gray-400 text-gray-500 cursor-pointer select-none ">
          <div className=" p-2 outline-none rounded-l-full  min-w-[300px] ">
            Busca tu cancion
          </div>
          <div className=" flex items-center justify-center p-1 px-2 rounded-r-full border-l border-gray-400">
            <SlMagnifier className="text-xl " />
          </div>
        </div>
      </div>
      {mode === "light" ? (
        <div
          className="p-2 rounded-full border-2 bg-gray-200 items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr text-gray-500  hover:from-blue-100 hover:to-blue-500 hover:text-blue-800 hover:border-blue-500 cursor-pointer"
          onClick={modeHandler}
        >
          <MdOutlineDarkMode className="text-2xl font-bold" />
        </div>
      ) : (
        <div
          className="p-2 rounded-full border-2 bg-gray-200 items-center justify-center transition-all duration-300 hover:bg-gradient-to-tr text-gray-500  hover:from-yellow-100 hover:to-yellow-500 hover:text-yellow-800 hover:border-yellow-500 cursor-pointer"
          onClick={modeHandler}
        >
          <MdOutlineLightMode className="text-2xl font-bold" />
        </div>
      )}
    </header>
  );
};
