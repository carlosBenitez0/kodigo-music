import Image from "next/image";
import React from "react";

export const Aside = () => {
  return (
    <aside className="px-4 row-span-2 border-2 border-black">
      <div className="boder0">
        <Image
          src="/kodigo-logo.png"
          width={200}
          height={100}
          alt="Logo codigo"
        />
      </div>
      <div>
        <button className="w-full h-full">Inicio</button>
      </div>
    </aside>
  );
};
