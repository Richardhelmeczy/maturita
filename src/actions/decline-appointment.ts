'use server'

import { createDB } from '../lib/db'



export async function declineAppointment(id: number) {
  const db = createDB()

  const createdAppointment = await db
  .updateTable('appointments')
  .set({confirmed: 0,})
  .where('id', '=', id)
  .execute()
}
