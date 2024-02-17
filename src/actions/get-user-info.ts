"use server"

import { createDB } from "../lib/db"

export async function userProfileInfo(id: string) {
  const db = createDB()

  const user = await db.selectFrom('users').selectAll().where('id', '=', id).executeTakeFirstOrThrow()

  return user

}