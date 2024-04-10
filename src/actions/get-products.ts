"use server"
import { createDB } from "../lib/db"

async function getProductsFromDb() {
  const db = createDB()

  const products = await db
  .selectFrom('products')
  .leftJoin('productsPhotos', 'products.id', 'productsPhotos.productId')
  .selectAll()
  .execute()

  return products
}
export async function getProducts() {
  const products=await getProductsFromDb();
  
  return (products);
}