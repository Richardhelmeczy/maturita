import { sql, Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await sql`
    CREATE TABLE doctors (
      id integer primary key autoincrement not null,
      name text not null,
      lastname text not null,
      bio text not null
    );
  `.execute(db)

  await sql`
    CREATE TABLE doctors_appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      customer_name TEXT NOT NULL,
      customer_lastname TEXT NOT NULL,
      appointment_date TEXT NOT NULL,
      doctor_id INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (doctor_id) REFERENCES doctors(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `.execute(db)
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await sql`
  
  `.execute(db)
}
