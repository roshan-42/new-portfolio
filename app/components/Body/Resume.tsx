import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <p className="font-bold text-3xl">Resume</p>
        <div className="bg-red-500 mt-3 h-[2px] w-24 rounded-full"></div>
      </div>
      <div className="flex items-center gap-2 text-2xl">
        <FaGraduationCap />
        <p>Education</p>
      </div>
      <div className="flex flex-wrap  gap-5">
        <div className="bg-red-100 rounded-xl p-3">
          <p className="text-xs">2018-2023</p>
          <p className="font-medium">Bachelors in Computer Science</p>
          <p className="text-xs">Amrit Science Campus, Kathmandu</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-3">
          <p className="text-xs">2014-2016</p>
          <p className="font-medium">+2</p>
          <p className="text-xs">
            Gorkha International Higher Secondary School
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
