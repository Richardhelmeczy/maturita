import { Kysely, sql } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {

  await sql`
    CREATE TABLE users (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      lastname TEXT NOT NULL
    );
  `.execute(db);

  await sql`
    CREATE TABLE basket (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      product_id INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES user(id), -- Corrected to reference user(id) instead of users(id)
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `.execute(db);


}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`DROP TABLE IF EXISTS basket;`.execute(db);
  await sql`DROP TABLE IF EXISTS user;`.execute(db);
}
