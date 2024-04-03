import { createDB } from '../lib/db'
import Link from 'next/link'

async function getDoctors() {
  const db = createDB()

  const doctors = await db.selectFrom('doctors').selectAll().execute()

  return doctors
}

type doctorsinfo = {
  id: string
  name: string
  lastname: string
  adress: string
  phone:string
  mail:string
}

function Doctor(props: doctorsinfo) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="text-lg font-semibold">
        {props.name} {props.lastname}
      </div>
      <div>{props.mail}</div>
      <div>{props.phone}</div>
      <div className="mb-3">{props.adress}</div>
      <Link
        href={`/doctors/appointment/${props.id}`}
        className="bg-[#96C8FF] border-gray-200 text-white hover:text-black hover:scale-195 rounded-xl p-2"
      >
        Objednať sa
      </Link>
    </div>
  );
}

export async function DoctorList() {
  const doctors = await getDoctors()

  return (
    <div className="grid grid-cols-3 gap-4">
      {doctors.map((p) => (
        <Doctor key={p.id} id={p.id} name={p.firstname} lastname={p.lastname} mail={p.email} phone={p.phone} adress={p.adress} />
      ))}
    </div>
  )
}
