"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "../Lib/client";


export async function createPost(formData: FormData) {
  const { userId } = await auth();
//  if (!userId) return;

  const desc = formData.get("desc") as string;

  await prisma.post.create({
    data: {
      desc,
      userId,
    },
  });


}