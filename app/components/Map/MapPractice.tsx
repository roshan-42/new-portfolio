import React from "react";
import hotel1 from "../../../assets/hotel1.webp";
import hotel2 from "@/assets/hotelsec.jpg";
import hotel3 from "@/assets/hotelthird.jpg";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { FaParking } from "react-icons/fa";

const MapPractice = () => {
  const hotel_data = [
    {
      img: hotel1,
      name: "Hotel Mala Inn",
      location: "Dang, Ghorahi",
      rating: "8.2 Excellent",
    },
    {
      img: hotel2,
      name: "Vingreli Hotel ",
      location: "Dang, Rabbe",
      rating: "8.0 Excellent",
    },
    {
      img: hotel3,
      name: "Doko Hotel Dang ",
      location: "Sahid gate, dang",
      rating: "8.0 Excellent",
    },
  ];

  return (
    <div className="flex flex-row w-full gap-5  ">
      <div className=" border-2 p-5 w-full flex gap-5 ">
        {hotel_data.map((item, index) => (
          <div className="bg-white drop-shadow-md rounded-lg w-fit p-4 flex flex-col gap-4">
            <Image className="h-52 w-52" src={item.img} alt="" />
            <p className="font-medium">{item.name}</p>
            <div className="flex gap-5 text-xs">
              <p>{item.rating}</p>
              <div className="flex items-center gap-2">
                {" "}
                <MdLocationOn />
                <p>{item.location}</p>
              </div>
            </div>
            <div className="flex gap-5  ">
              <FaWifi />

              <TbAirConditioningDisabled />
              <FaParking />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPractice;
