"use server";
import { prisma } from "@/src/Lib/client";
import MiddleStories from "./MiddleStories";

const MiddleStoriesWrapper = async() => {

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
    },
    include: {
      user: true,
    },
  });

  console.log('from middle story wrapper', stories);

  return <MiddleStories stories={stories} />;
};

export default MiddleStoriesWrapper;