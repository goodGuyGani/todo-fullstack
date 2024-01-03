"use server";
import { createCollectionSchemaType } from "@/schema/createCollection";
import prisma from "@/lib/prisma";

export async function createCollection(
  form: createCollectionSchemaType,
  id: any
) {
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
