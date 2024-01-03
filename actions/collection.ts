"use server";
import { createCollectionSchemaType } from "@/schema/createCollection";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers"

export async function createCollection(form: createCollectionSchemaType, id: number) {

  return await prisma.collection.create({
    data: {
      userId: id,
      color: form.color,
      name: form.name,
    },
  });
}

export async function deleteCollection(id: number) {

  return await prisma.collection.delete({
    where: {
      id: id,
    },
  });
}
