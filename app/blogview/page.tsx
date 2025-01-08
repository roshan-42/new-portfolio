import React from "react";
import { getData } from "@/hooks/useBlogData";
import BlogCard from "../Second/BlogCard";

const BlogView = async () => {
  const data = await getData();

  return (
    <div className="mx-5 pt-5">
      <div className="flex gap-2 w-full">
        {data.map((item, index) => (
          <BlogCard
            key={index}
            imageUrl="https://cdn.pixabay.com/photo/2024/11/21/22/06/deer-9214838_1280.jpg"
            title={item.title ?? "No Title Available"}
            description={item.description ?? "No Description Available"}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogView;
