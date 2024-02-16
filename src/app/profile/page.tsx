"use client"

import { useEffect, useState } from "react";
import { UserProfileDetail } from "../../actions/GetUserProfile";
import { useUserId } from "../../components/GetUser";

export default function Userprofile() {
  const userId = useUserId()
  console.log(userId)
  const [userAppointments, setUserAppointments] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async()=>{
      const profileDetail = await UserProfileDetail(userId)
      setUserAppointments(profileDetail)}
    fetchData()
  }, [userId]);
  
  
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <p>My Appointments:</p>
      <div className="grid grid-cols-3 gap-4">
        {userAppointments.map((appo) => (
          // eslint-disable-next-line react/jsx-key
          <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>{appo.customerName}</div>
            <div>{appo.customerLastname}</div>
            <div>{appo.appointmentDate}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
