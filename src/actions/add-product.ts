"use server"

import { createDB } from '../lib/db';

type CreateProductParams = {
  product_name: string;
  description: string;
  price: number
};

export async function createProduct(product: CreateProductParams) {
  const db = createDB();

  const createdUser = await db
    .insertInto('products')
    .values({
      name: product.product_name,
      description: product.description,
      price: product.price,
    })
    .returningAll()
    .executeTakeFirstOrThrow();

}