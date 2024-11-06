import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import work1 from "@/public/assets/work1.png";
import work2 from "@/public/assets/work2.png";
import work3 from "@/public/assets/work3.png";
import work4 from "@/public/assets/upschool.png";

type WorkCardProps = {
  link: string;
  image: StaticImageData;
  name: string;
};

const WorkCard: React.FC<WorkCardProps> = ({ link, image, name }) => {
  return (
    <div className="hover:bg-red-500 hover:text-white text-black w-fit h-fit rounded-md shadow-lg hover:scale-110 transition-all">
      <Link target="black" href={link}>
        <div className="w-64 sm:w-96 ">
          <Image src={image} alt="" />
          <p className=" p-2">{name} </p>
        </div>
      </Link>
    </div>
  );
};

const Works = () => {
  return (
    <div className="flex flex-col gap-5  h-[25rem]">
      <div className="flex items-center gap-3">
        <p className="font-bold text-3xl">Works</p>
        <div className="bg-red-500 mt-3 h-[2px] w-24 rounded-full"></div>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start py-4">
        <WorkCard
          link="https://www.laliguras.de/"
          image={work1}
          name="Laliguras GmbH"
        />
        <WorkCard
          link="https://library.upschool.co/"
          image={work4}
          name="UpSchool"
        />
        <WorkCard
          link="https://ecommerce-fawn-five.vercel.app/"
          image={work2}
          name="Ecommerce Website"
        />
        <WorkCard
          link="https://mario-css.vercel.app/"
          image={work3}
          name="Static Website"
        />
      </div>
    </div>
  );
};

export default Works;
