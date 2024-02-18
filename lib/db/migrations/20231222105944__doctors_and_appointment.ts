import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
    CREATE TABLE doctors (
      id TEXT PRIMARY KEY NOT NULL,
      firstname text not null,
      lastname text not null,
      email TEXT NOT NULL,
      adress TEXT NOT NULL,
      phone TEXT NOT NULL
    );
  `.execute(db)

  await sql`
    CREATE TABLE appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      doctor_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      date text NOT NULL,
      time TEXT NOT NULL,
      confirmed text,
      FOREIGN KEY (doctor_id) REFERENCES doctors(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  
  `.execute(db)
}
