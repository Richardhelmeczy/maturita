'use server'

import { createDB } from '../lib/db'

export async function addToBasket(id: number , userid: string ) {
  const db = createDB()

  const createdProduct = await db
    .insertInto('basket')
    .values({
      productId: id,  
      userId: userid,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

}
