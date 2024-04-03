import { DoctorList } from '../../components/DoctorList'
export default function Home() {
  return (
    <main>
      <div className="flex min-h-[91vh] py-6 flex-col items-center justify-center ">
        <DoctorList />
      </div>
    </main>
  )
}
