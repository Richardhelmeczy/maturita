"use server"
import { createDB } from "../lib/db";

async function getUserAppointments(id: string) {
  const db = createDB();

  // First, try to fetch appointments where the user is the doctor
  const doctorAppointments = await db
    .selectFrom('appointments')
    .leftJoin('users', 'users.id', 'appointments.userId')  // Assuming 'users' are the patients
    .select([
      'appointments.date',
      'appointments.time',
      'appointments.id',
      'appointments.confirmed',
      'users.firstname as patientFirstName',
      'users.lastname as patientLastName',
      'appointments.doctorId'
    ])
    .where('appointments.doctorId', '=', id)
    .execute();

  if (doctorAppointments) {
    return doctorAppointments;
  }

  const patientAppointments = await db
    .selectFrom('appointments')
    .leftJoin('doctors', 'doctors.id', 'appointments.doctorId')
    .select([
      'appointments.date',
      'appointments.time',
      'appointments.id',
      'appointments.confirmed',
      'doctors.firstname as doctorFirstName',
      'doctors.lastname as doctorLastName',
      'appointments.doctorId'
    ])
    .where('appointments.userId', '=', id)
    .execute();

  return patientAppointments;
}

export async function userProfileAppointments(id: string) {
  const userAppointments = await getUserAppointments(id);
  return userAppointments;
}
