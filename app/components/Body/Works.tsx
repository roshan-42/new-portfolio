import Link from "next/link";
import React from "react";
import work1 from "@/public/assets/work1.png";
import work2 from "@/public/assets/work2.png";

import Image from "next/image";

const Works = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
      <div className="bg-gray-300 shadow-lg hover:scale-110 transition-all w-fit h-fit rounded-md ">
        <Link target="blank" href="https://www.laliguras.de/">
          <div className="w-64 sm:w-96 ">
            <Image src={work1} alt="" />
            <p className="p-2 text-gray-600">Laliguras GmbH </p>
          </div>
        </Link>
      </div>
      <div className="bg-gray-300 w-fit h-fit rounded-md shadow-lg ">
        <Link target="black" href="https://ecommerce-fawn-five.vercel.app/">
          <div className="w-64 sm:w-96 ">
            <Image src={work2} alt="" />
            <p className="text-gray-600 p-2">Ecommerce Website </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Works;
