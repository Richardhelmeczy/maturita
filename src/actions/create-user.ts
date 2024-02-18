"use server"

import { revalidatePath } from 'next/cache';
import { createDB } from '../lib/db';

type CreateUserParams = {
  name: string;
  lastname: string;
};

export async function createUser(user: CreateUserParams, id: string) {
  const db = createDB();

  // Corrected from 'firstnamename' to 'firstname'
  const createdUser = await db
    .insertInto('users')
    .values({
      id: id,
      firstname: user.name,
      lastname: user.lastname,
      email: 'nic',
      adress: 'nic',
      phone: "00000"
    })
    .returningAll()
    .executeTakeFirstOrThrow();

  revalidatePath('');
}
