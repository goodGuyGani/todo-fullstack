"use server";

import prisma from "@/lib/prisma";
import { createTaskSchemaType } from "@/schema/createTask";

export async function createTask(data: createTaskSchemaType, id: number) {

  const { content, expiresAt, collectionId } = data;

  return await prisma.task.create({
    data: {
      userId: id,
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

export async function setTaskToDone(id: number, userId: number) {

  return await prisma.task.update({
    where: {
      id: id,
      userId: userId,
    },
    data: {
      done: true,
    },
  });
}

export async function deleteTask(id: number, userId:number){

  return await prisma.task.delete({
    where: {
      id: id,
      userId: userId,
    }
  });
} 