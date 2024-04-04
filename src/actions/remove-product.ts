"use server";

import { revalidatePath } from "next/cache";
import { createDB } from "../lib/db";

export async function removeProduct(id: number) {
  const db = createDB();

  const deletedProduct = await db
    .deleteFrom("basket")
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirstOrThrow();

  revalidatePath("")
}
