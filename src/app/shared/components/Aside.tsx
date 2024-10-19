import Image from "next/image";
import React from "react";

export const Aside = () => {
  return (
    <aside className="px-4 row-span-2 border-2 border-black">
      <div className="border-2 border-black">
        <Image
          src="https://res.cloudinary.com/dc69f3e0o/image/upload/v1729347657/Kodigo%20Music/nxsqlfpn9cm2eofutcip.png"
          width={50}
          height={20}
          alt="Logo codigo"
        />
      </div>
      <div>
        <button className="w-full h-full">Inicio</button>
      </div>
    </aside>
  );
};
