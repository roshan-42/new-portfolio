import React from "react";
import Image from "next/image";
import { prisma } from "@/utils/prisma";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  //   onView: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  //   onView,
}) => {
  return (
    <div className="w-2/6 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          //   onClick={onView}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
