"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
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
          <p className="text-gray-700 mb-4 truncate">{description}</p>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            <div className="p-4 border-b">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <div className="p-4">
              <textarea className="text-gray-700 min-h-96 w-full">
                {description}
              </textarea>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
