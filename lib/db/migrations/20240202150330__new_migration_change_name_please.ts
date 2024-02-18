import { Kysely, sql } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
    CREATE TABLE users (
      id TEXT PRIMARY KEY NOT NULL,
      firstname TEXT NOT NULL,
      lastname TEXT NOT NULL,
      email TEXT NOT NULL,
      adress TEXT NOT NULL,
      phone TEXT NOT NULL
    );
  `.execute(db);

  await sql`
    CREATE TABLE basket (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      product_id INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `.execute(db);
}
