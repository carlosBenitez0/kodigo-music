import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";

export const Header = () => {
  return (
    <header>
      <div>
        <div>
          <IoIosArrowBack />
        </div>
        <div>
          <input type="text" />
          <div>
            <SlMagnifier />
          </div>
        </div>
      </div>
      <div>
        <CiDark />
      </div>
    </header>
  );
};
