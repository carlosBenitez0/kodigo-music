"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Aside = () => {
  const [bubble, setBubble] = useState(false);

  return (
<<<<<<< HEAD
    <aside className="px-4 row-span-2 border-2 border-black">
      <div className="boder0">
=======
    <aside className="row-span-2 p-4 border-r border-gray-400">
      <div className="">
>>>>>>> styles-main-page
        <Image
          src="/kodigo-logo.png"
          width={200}
          height={100}
          alt="Logo codigo"
        />
        <h1 className="text-3xl font-bold">Kodigo Music</h1>
      </div>
      <section>
        <a
          className="relative block mx-auto my-6 py-2 text-center border border-[rgba(0,0,0,0.616)] backdrop-blur-[0.5rem] bg-transparent cursor-pointer z-10 overflow-hidden rounded-lg shadow-[0_0_.5rem_rgba(0,0,0,0.232)] transition-all duration-500 text-lg font-semibold min-w-[200px]"
          href="#"
          onMouseEnter={() => setBubble(true)}
          onMouseLeave={() => setBubble(false)}
        >
          Inicio
          <div className="icon-anchor"></div>
          <span
            className={`absolute -left-4 -top-4 p-8 rounded-full bg-gradient-to-br from-orange-200 to-red-500 z-[-1] transition-transform duration-500  ${
              bubble ? "scale-150" : "scale-100"
            }`}
          ></span>
          <span
            className={`text-white absolute right-8 top-4 p-8 rounded-full bg-gradient-to-br from-green-500 to-purple-500 z-[-1] transition-transform duration-500 ${
              bubble ? "scale-150" : "scale-100"
            }`}
          ></span>
        </a>
      </section>
    </aside>
  );
};
