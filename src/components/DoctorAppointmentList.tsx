import { createDB } from '../lib/db'

async function getappoitnmets(id: number) {
  const db = createDB()

  const appoitnmets = await db
    .selectFrom('doctorsAppointments')
    .selectAll()
    .where('doctorsAppointments.doctorId', '=', id)
    .execute()

  return appoitnmets
}

export async function Appoitnmets({ id }: { id: number }) {
  const appointmets = await getappoitnmets(id)

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {appointmets.map((appo, index) => (
          <div key={index} className="max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="mb-2">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Name:</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">{appo.customerName} {appo.customerLastname}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Date:</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">{appo.appointmentDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
)


}
