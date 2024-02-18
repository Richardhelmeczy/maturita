'use server'

import { createDB } from '../lib/db'

type CreateappointmentParams = {
  date: string
  time: string
}

export async function createAppointment(appointment: CreateappointmentParams, doctorid: string, userid: string) {
  const db = createDB()

  const createdAppointment = await db
      .insertInto('appointments')
      .values({
        doctorId: doctorid,
        userId: userid,
        date: appointment.date,
        time: appointment.time
      })
      .returningAll()
      .executeTakeFirstOrThrow()
}
