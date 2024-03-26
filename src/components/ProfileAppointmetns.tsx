"use client"

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { userProfileAppointments } from "../actions/get-user-appointments";
import { deleteAppointment } from "../actions/delete-appointment";


export default function ProfileAppointments() {
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
      <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>{appo.firstname} {appo.lastname}</div>
        <div>{appo.date} at {appo.time}</div>
        <div>
          {/* Here we check the confirmed status */}
          {appo.confirmed == 0 ? (
            <span className="text-yellow-500">Not Accepted</span>
          ) : appo.confirmed === 1 ? (
            <span className="text-green-500">Accepted</span>
          ) : (
            <span className="text-red-500">Unknown Status</span>
          )}
        </div>
        <button
          className="mt-4 bg-red-500 text-white rounded hover:bg-red-700 p-2"
          onClick={() => handleDeleteAppointment(appo.id)}
        >
          Cancel
        </button>
      </div>
    ))}
  </div>
</div>

  )
};
