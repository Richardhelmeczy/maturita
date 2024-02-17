"use server"

import { createDB } from '../lib/db'
export async function deleteAppointment(appointmentId: number) {
  const db = createDB()

  const deletedAppointment = await db
    .deleteFrom('doctorsAppointments')
    .where('id', '=', appointmentId)
    .returningAll()
    .executeTakeFirstOrThrow()


}