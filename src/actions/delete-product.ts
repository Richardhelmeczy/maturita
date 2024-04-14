"use server"

import { createDB } from '../lib/db'

export async function deleteproduct(id: number) {
  const db = createDB()

  const deleteProductPhotos = await db
    .deleteFrom('productsPhotos')
    .where('productsPhotos.productId', '=', id)
    .returningAll()
    .execute();

  const deleteProductRewiews = await db
    .deleteFrom('productsReviews')
    .where('productsReviews.productId', '=', id)
    .returningAll()
    .execute();

  const deleteProduct = await db
    .deleteFrom('products')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirstOrThrow()
    
}