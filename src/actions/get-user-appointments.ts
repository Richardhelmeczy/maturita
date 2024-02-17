"use server"

import { createDB } from "../lib/db"

async function getUserAppointments(id: string) {
  const db = createDB()

  const user = await db
    .selectFrom('doctorsAppointments')
    .leftJoin('doctors', 'doctors.id', 'doctorsAppointments.doctorId')
    .select(['doctorsAppointments.id','doctors.name','doctors.lastname','doctorsAppointments.appointmentDate'])
    .where('doctorsAppointments.userId', '=', id)
    .execute();

  return user
}
export async function userProfileAppointments(id: string) {
  const userAppointments=await getUserAppointments(id);
  
  return (userAppointments)
}
