'use server'

import { revalidatePath } from 'next/cache'
import { createDB } from '../lib/db'

type CreateUserParams = {
  name: string
  lastname: string
}

export async function createUser(user: CreateUserParams, id: string) {
  const db = createDB()

  const createdProduct = await db
    .insertInto('users')
    .values({
      id: id,
      name: user.name,
      lastname: user.lastname,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  revalidatePath('')
}
