"use server";
import { createCollectionSchemaType } from "@/schema/createCollection";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers"

export async function createCollection(form: createCollectionSchemaType) {
  const user = await cookies();

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.create({
    data: {
      userId: user.get('id').value,
      color: form.color,
      name: form.name,
    },
  });
}

export async function deleteCollction(id: number) {
  const user = await cookies();
  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.delete({
    where: {
      id: id,
    },
  });
}
