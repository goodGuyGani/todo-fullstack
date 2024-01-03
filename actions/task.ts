"use server";

import prisma from "@/lib/prisma";
import { createTaskSchemaType } from "@/schema/createTask";
import { currentUser } from "@clerk/nextjs";
import { cookies } from "next/headers"

export async function createTask(data: createTaskSchemaType) {
  const user = await cookies();

  if (!user) {
    throw new Error("user not found");
  }

  const { content, expiresAt, collectionId } = data;

  return await prisma.task.create({
    data: {
      userId: user.get('id').value,
      content,
      expiresAt,
      Collection: {
        connect: {
          id: collectionId,
        },
      },
    },
  });
}

export async function setTaskToDone(id: number) {
  const user = await cookies();

  if (!user) {
    throw new Error("user not found");
  }

  return await prisma.task.update({
    where: {
      id: id,
      userId: user.get('id').value,
    },
    data: {
      done: true,
    },
  });
}
