'use server'

import { createDB } from '../lib/db'



export async function acceptAppointment(id: number) {
  const db = createDB()

  const createdAppointment = await db
  .updateTable('appointments')
  .set({confirmed: 1,})
  .where('id', '=', id)
  .execute()
}
