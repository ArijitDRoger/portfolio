import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="absolute w-[100%] z-10 p-8 flex items-center justify-end">
      <div className="flex items-center px-7">
        <button className=" hover:bg-[black] hover:scale-110 transition-transform duration-200 px-3 py-2 rounded-full text-white border-1 mr-4 h-[40px]">
          Hire me
        </button>
        <RiMenu3Fill className="text-2xl text-white hover:scale-110 hover:text-white transition-transform duration-200" />
      </div>
    </div>
  );
};

export default Header;
