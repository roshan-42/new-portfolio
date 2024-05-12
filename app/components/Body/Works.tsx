import Link from "next/link";
import React from "react";
import work1 from "@/public/assets/work1.png";
import work2 from "@/public/assets/work2.png";
import work3 from "@/public/assets/work3.png";

import Image from "next/image";

const Works = () => {
  return (
    <div className="flex flex-col gap-5  h-[25rem]">
      <div className="flex items-center gap-3">
        <p className="font-bold text-3xl">Works</p>
        <div className="bg-red-500 mt-3 h-[2px] w-24 rounded-full"></div>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start py-4">
        <div className="hover:bg-green-500 hover:text-white text-black shadow-lg hover:scale-110 transition-all w-fit h-fit rounded-md ">
          <Link target="blank" href="https://www.laliguras.de/">
            <div className="w-64 sm:w-96 ">
              <Image src={work1} alt="" />
              <p className="p-2 ">Laliguras GmbH </p>
            </div>
          </Link>
        </div>
        <div className="hover:bg-orange-500 hover:text-white text-black w-fit h-fit rounded-md shadow-lg hover:scale-110 transition-all">
          <Link target="black" href="https://ecommerce-fawn-five.vercel.app/">
            <div className="w-64 sm:w-96 ">
              <Image src={work2} alt="" />
              <p className=" p-2">Ecommerce Website </p>
            </div>
          </Link>
        </div>
        <div className="hover:bg-red-500 hover:text-white text-black w-fit h-fit rounded-md shadow-lg hover:scale-110 transition-all">
          <Link target="black" href="https://mario-css.vercel.app/">
            <div className="w-64 sm:w-96 ">
              <Image src={work3} alt="" />
              <p className=" p-2">Static Website </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
