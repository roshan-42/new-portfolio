"use client";
import React, { useState } from "react";
import * as actions from "@/actions";
import Form from "./Form";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Blog Created:", { title, description });
    alert("Blog Created Successfully!");
  };

  return (
    <Form action={actions.createBlog} className="p-4 max-w-md mx-auto border">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
      <input
        name="input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="desc"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-4"></textarea>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-red-500 text-white p-2 rounded">
        Create Blog
      </button>
    </Form>
  );
};

export default CreateBlog;
