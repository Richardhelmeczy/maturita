"use client"

import { useEffect, useState } from "react";
import { useUserId } from "../../../components/GetUser";
import { userProfileAppointments } from "../../../actions/get-user-appointments";



export default function Userprofile() {
  const userId = useUserId()
  console.log(userId)
  const [userAppointments, setUserAppointments] = useState<any[]>([]);
  useEffect(() => {
    if (userId !== '') {
      const fetchData = async()=>{
        const profileAppointments = await userProfileAppointments(userId)
        setUserAppointments(profileAppointments)}
      fetchData()
    }
  }, [userId]);
  
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">

    </main>
  )
};
