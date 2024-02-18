"use client"
import { DoctorAppointment } from '../../../../components/DoctorAppointment'

type DoctorAppointmentPageProps = {
  params: {
    id: string
  }
}

export default async function DoctorAppointmentPage({ params }: DoctorAppointmentPageProps) {
  const doctorId = params.id

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center p-24">
        <DoctorAppointment id={doctorId} />
      </div>
    </main>
  )
}
