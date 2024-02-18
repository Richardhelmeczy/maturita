"use server"

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'
export async function deleteAppointment(id: number) {
  const db = createDB()

  const deletedAppointment = await db
    .deleteFrom('appointments')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow()
    
  revalidatePath('')
}