"use client"

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { userProfileAppointments } from "../actions/get-user-appointments";
import { deleteAppointment } from "../actions/delete-appointment";
import { acceptAppointment } from "../actions/accept-appointment";

export default function ProfileAppointments() {
  const userId = useUserId();
  const [userAppointments, setUserAppointments] = useState<any[]>([]);
  const [isDoctor, setIsDoctor] = useState(false);

  const fetchData = async () => {
    if (userId !== '') {
      const profileAppointments = await userProfileAppointments(userId);
      setUserAppointments(profileAppointments);
      setIsDoctor(profileAppointments.some(appo => appo.doctorId === userId));
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  const handleDeleteAppointment = async (id: number) => {
    console.log('Deleting appointment with ID:', id);
    try {
      await deleteAppointment(id);
      fetchData();
    } catch (error) {
      console.error('Failed to delete appointment:', error);
    }
  };

  const handleAcceptAppointment = async (id: number) => {
    try {
      await acceptAppointment(id);
      fetchData(); // Refresh the appointments list
    } catch (error) {
      console.error('Failed to accept appointment:', error);
    }
  };

  const handleDeclineAppointment = async (id: number) => {
    try {
      //await declineAppointment(id);
      fetchData(); // Refresh the appointments list
    } catch (error) {
      console.error('Failed to decline appointment:', error);
    }
  };

  if (isDoctor) {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <p>Moje prihlasenia :</p>
        <div className="grid grid-cols-3 gap-4">
          {userAppointments.map((appo) => (
            <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div>Pacient: {appo.patientFirstName} {appo.patientLastName}</div>
              <div>{appo.date} at {appo.time}</div>
              <button
              className="mt-4 bg-green-500 text-white rounded hover:bg-red-700 p-2"
              onClick={() => handleAcceptAppointment(appo.id)}
              >
                Accept
              </button>
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
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <p>My Appointments:</p>
      <div className="grid grid-cols-3 gap-4">
        {userAppointments.map((appo) => (
          <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>{appo.doctorFirstName} {appo.doctorLastName}</div>
            <div>{appo.date} at {appo.time}</div>
            <div>
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
  );
}