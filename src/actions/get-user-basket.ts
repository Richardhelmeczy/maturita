"use server"

import { createDB } from "../lib/db"

export async function getUserBasket(userId: string) {
    const db = createDB()
  
    const basket = await db
      .selectFrom('products')
      .leftJoin('basket', 'basket.productId', 'products.id')
      .selectAll()
      .where('basket.userId', '=', userId)
      .execute();
  
    return basket
}

  