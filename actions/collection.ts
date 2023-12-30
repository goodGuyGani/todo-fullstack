"use server";
import { createCollectionSchemaType } from "@/schema/createCollection";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { createUserSchemaType } from "@/schema/createUser";

export async function createCollection(form: createCollectionSchemaType) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
}

export async function createUser(form: createUserSchemaType) {
  return await prisma.user.create({
    data: {
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      password: form.password,
    },
  });
}

export async function deleteCollction(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.delete({
    where: {
      id: id,
    },
  });
}
