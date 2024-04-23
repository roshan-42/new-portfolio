import React from "react";
import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import figma from "@/assets/figma.png";
import js from "@/assets/JS.png";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col justify-between p-5 ">
      <div className="flex items-center gap-3">
        <p className="font-bold text-3xl">Skills</p>
        <div className="bg-red-500 h-[2px] w-24 rounded-full"></div>
      </div>
      <div className=" mt-10   flex flex-wrap gap-12   text-3xl sm:text-4xl">
        <div className="flex flex-col items-center ">
          <FaReact color="#00729A" />
          <p className="text-sm sm:text-xl">React</p>
        </div>
        <div className="flex flex-col items-center ">
          <TbBrandNextjs />
          <p className="text-sm sm:text-xl">NextJS</p>
        </div>
        <div className="flex flex-col h-10 w-10  -mt-2 sm:-mt-1 items-center ">
          <Image src={js} alt="" />
          <p className="text-sm sm:text-xl ">Javascript</p>
        </div>
        <div className="flex flex-col items-center ">
          <FaHtml5 color="#FC4F13" />
          <p className="text-sm sm:text-xl">HTML</p>
        </div>
        <div className="flex flex-col items-center ">
          <FaBootstrap color="674E8E" />
          <p className="text-sm sm:text-xl">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center ">
          <SiTailwindcss color="#1DC0CD" />
          <p className="text-sm sm:text-xl">Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center h-12 w-12 -mt-4 sm:-mt-3">
          <Image src={figma} alt="" />
          <p className="text-sm sm:text-xl">Figma</p>
        </div>
        <div className="flex flex-col items-center ">
          <SiAdobephotoshop color="#08253C" />
          <p className="text-sm sm:text-xl">Adobe Photoshop</p>
        </div>
        <div className="flex flex-col items-center ">
          <SiAdobepremierepro color="#08253C" />
          <p className="text-sm sm:text-xl">Premiere Pro</p>
        </div>
        <div className="flex flex-col items-center ">
          <SiAdobeaftereffects color="#08253C" />
          <p className="text-sm sm:text-xl">After Effects</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
