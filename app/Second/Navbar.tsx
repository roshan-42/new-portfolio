"use client";

import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-white h-24 shadow-md flex justify-between items-center px-10">
      <div className="text-3xl font-bold text-orange-500">ROSHAN</div>
      <div className="flex gap-8 font-arvo text-xl">
        <button className="text-orange-500">Home</button>
        <button className="hover:text-orange-500 transition-all">About</button>
        <button className="hover:text-orange-500 transition-all">
          Portfolio
        </button>
        <button className="hover:text-orange-500 transition-all">
          Contacts
        </button>
        <button className="hover:text-orange-500 transition-all">Blog</button>
      </div>
      <button className="bg-orange-500 flex items-center justify-center gap-2 text-white p-5 hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white transition-all ease-in-out hover:shadow-[8px_8px_0px_rgba(249,115,22,1)]">
        My Page <IoIosArrowForward />
      </button>
    </div>
  );
}
