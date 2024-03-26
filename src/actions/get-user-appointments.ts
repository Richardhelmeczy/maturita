"use server"

import { createDB } from "../lib/db"

async function getUserAppointments(id: string) {
  const db = createDB()

  const user = await db
    .selectFrom('appointments')
    .leftJoin('doctors', 'doctors.id', 'appointments.doctorId')
    .select(['doctors.firstname','doctors.lastname','appointments.date','appointments.time','appointments.id','appointments.confirmed'])
    .where('appointments.userId', '=', id)
    .execute();

  return user
}
export async function userProfileAppointments(id: string) {
  const userAppointments=await getUserAppointments(id);
  
  return (userAppointments)
}
