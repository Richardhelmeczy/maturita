"use server"
import { createDB } from "../lib/db"

async function getDoctorsFromDb() {
  const db = createDB()

  const doctors = await db
  .selectFrom('doctors')
  .selectAll()
  .execute()

  return doctors
}
export async function getDoctors() {
  const doctors=await getDoctorsFromDb();
  
  return (doctors);
}