"use server"

import { createDB } from "../lib/db"

async function getUserInfo(id: string) {
  const db = createDB()

  const user = await db.selectFrom('users').selectAll().where('id', '=', id).executeTakeFirstOrThrow()

  return user
}
export async function userProfileInfo(id: string) {
  const user=await getUserInfo(id);
  
  return (user);
}