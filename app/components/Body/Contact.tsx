import React from "react";
import { FaArrowLeftLong, FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-3 ">
        <p className="font-bold text-3xl">Contact</p>
        <div className="bg-red-500 h-[2px] w-24 rounded-full"></div>
      </div>
      <div className="hidden lg:flex items-center justify-center h-[30vh]">
        <FaArrowLeftLong size={50} />
      </div>
      <div className="flex lg:hidden items-center justify-center h-[30vh]">
        <FaArrowUp size={50} />
      </div>
    </div>
  );
};

export default Contact;
