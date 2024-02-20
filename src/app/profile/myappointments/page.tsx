"use client"

import { useEffect, useState } from "react";
import { useUserId } from "../../../components/GetUser";
import { userProfileAppointments } from "../../../actions/get-user-appointments";
import { deleteAppointment } from "../../../actions/delete-appointment";

export default function Userprofile() {
  const userId = useUserId()
  const [userAppointments, setUserAppointments] = useState<any[]>([]);
  const fetchData = async () => {
    if (userId !== '') {
      const profileAppointments = await userProfileAppointments(userId);
      setUserAppointments(profileAppointments);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);
  const handleDeleteAppointment = async (id: number) => {
    console.log('Deleting appointment with ID:', id); // Ensure ID is logged
    try {
      await deleteAppointment(id);
      fetchData();
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <p>My Appointments:</p>
      <div className="grid grid-cols-3 gap-4">
        {userAppointments.map((appo) => (
            <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg ">
              <div>{appo.firstname} {appo.lastname}</div>
              <div>{appo.date} {appo.time}</div>
            <button
              className="bg-red-500 text-white rounded hover:bg-red-700 p-2"
              onClick={() => handleDeleteAppointment(appo.id)} // Use the new handler
            >
              Cancel
            </button>
            </div>
        ))}
      </div>
    </div>
  )
};
