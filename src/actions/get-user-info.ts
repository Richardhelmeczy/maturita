"use server"
import { createDB } from "../lib/db";

export async function userProfileInfo(id: string) {
  const db = createDB();

  const doctorInfo = await db.selectFrom('doctors')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst();

  if (doctorInfo) {
    return doctorInfo;
  }

  const userInfo = await db.selectFrom('users')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirstOrThrow();

  return userInfo;
}
