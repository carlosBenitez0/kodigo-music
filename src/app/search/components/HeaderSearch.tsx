"use client";
import { useSearch } from "@/app/hook/useSearch";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

export const HeaderSearch = () => {
  const [mode, setMode] = useState("light");
  const { handleSearchChange } = useSearch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onHandleSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleSearchChange(data.input_search);
  };

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
        <Link href={"/"}>
          <div className="p-2 rounded-full border-1 bg-gray-200 items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:text-gray-900 hover:border-gray-400 text-gray-500 cursor-pointer ">
            <IoIosArrowBack className="text-2xl cursor-pointer" />
          </div>
        </Link>

        <form
          className={`flex rounded-full p-[2px] border-2 bg-gray-200 items-center hover:bg-gray-300 transition-all duration-300 hover:text-gray-900  text-gray-500 select-none ${
            errors.input_search ? "border-red-500" : "hover:border-gray-400"
          }`}
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <input
            type="text"
            id="input_search"
            placeholder="Busca tu canción"
            className="p-2 px-4  outline-none rounded-l-full min-w-[300px] bg-transparent"
            {...register("input_search", { required: true, minLength: 3 })}
          />

          <div className="flex items-center justify-center p-1 px-2 rounded-r-full border-l border-gray-400">
            <button type="submit">
              <SlMagnifier
                className={`text-xl ${
                  errors.input_search ? "text-red-500" : "text-gray-500"
                }`}
              />
            </button>
          </div>
          {errors.input_search && (
            <small className="text-red-500">
              Por favor, ingresa al menos 3 caracteres.
            </small>
          )}
        </form>
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
