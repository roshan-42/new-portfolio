"use client";
import Link from "next/link";
import Navbar from "../Second/Navbar";

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <Link href="/">This is my portfolio</Link>
    </div>
  );
}
