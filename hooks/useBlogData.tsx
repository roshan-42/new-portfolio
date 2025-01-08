import { prisma } from "@/utils/prisma";
import { useEffect } from "react";

export async function getData() {
  const data = await prisma.blog.findMany({
    select: {
      title: true,
      description: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
}
