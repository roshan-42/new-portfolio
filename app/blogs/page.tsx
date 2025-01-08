"use client";
import React, { useState } from "react";
import BlogCard from "../Second/BlogCard";
import CreateBlog from "../Second/CreateBlog";
import Link from "next/link";

const Blogs = async () => {
  const [showBlogs, setShowBlogs] = useState(false);

  const BlogContent = [
    {
      image:
        "https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_1280.jpg",
      title: "First blog",
      description:
        "A strong earthquake shook a high-altitude region of western China and areas of Nepal on Tuesday, damaging hundreds of houses, littering streets with rubble and killing at least 126 people in Tibet.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_1280.jpg",
      title: "Second blog",
      description:
        "Rescue workers climbed mounds of broken bricks, some using ladders in heavily damaged villages, as they searched for survivors. Videos posted by China's Ministry of Emergency Management showed two people being carried on stretchers by workers treading over the debris from collapsed homes..",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_1280.jpg",
      title: "Third blog",
      description:
        "A strong earthquake shook a high-altitude region of western China and areas of Nepal on Tuesday, damaging hundreds of houses, littering streets with rubble and killing at least 126 people in Tibet.",
    },
  ];
  return (
    <div className="mx-20">
      <div className="text-2xl font-bold mt-5">Blog Section </div>
      <Link href="/blogview">
        <button className="bg-orange-500 text-white p-5 m-2 hover:bg-orange-600 rounded-md transition-all ease-in-out">
          View blogs
        </button>
      </Link>

      {showBlogs && (
        <div className="flex gap-2 w-full">
          {BlogContent.map((item, index) => (
            <BlogCard
              key={index}
              imageUrl="https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_1280.jpg"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}

      <CreateBlog />
    </div>
  );
};

export default Blogs;
