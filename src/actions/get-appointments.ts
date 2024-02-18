"use server"

import { createDB } from "../lib/db"

export async function getAppointments(id:string) {
  const db = createDB()

  const appointments = await db
    .selectFrom('appointments')
    .selectAll()
    .where('doctorId','=',id)
    .execute();

  return appointments
}

