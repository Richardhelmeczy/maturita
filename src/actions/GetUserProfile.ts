"use server"

import { createDB } from "../lib/db"

async function getUserAppointments(id: string) {
  const db = createDB()

  const user = await db.selectFrom('doctorsAppointments').selectAll().where('userId', '=', id).execute()

  return user
}
export async function UserProfileDetail(id: string) {
  const user=await getUserAppointments(id);
  
  return (
   user
  );
}
