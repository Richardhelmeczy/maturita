"use client"

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { userProfileAppointments } from "../actions/get-user-appointments";
import { deleteAppointment } from "../actions/delete-appointment";
import { acceptAppointment } from "../actions/accept-appointment";
import { declineAppointment } from "../actions/decline-appointment";

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
      fetchData();
    } catch (error) {
      console.error('Failed to accept appointment:', error);
    }
  };

  const handleDeclineAppointment = async (id: number) => {
    try {
      await declineAppointment(id);
      fetchData();
    } catch (error) {
      console.error('Failed to decline appointment:', error);
    }
  };

  if (isDoctor) {
    return (
      <div className="flex min-h-[91vh] flex-col items-center p-10">
        <p className="text-3xl font-bold">Moje objednávky</p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {userAppointments.map((appo) => (
            <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
              <div>Pacient: {appo.patientFirstName} {appo.patientLastName}</div>
              <div>{appo.date} o {appo.time}</div>
              <button
              className="mt-4 button"
              onClick={() => handleAcceptAppointment(appo.id)}
              >
                Akceptovať
              </button>
              <button
              className="mt-4 button"
              onClick={() => handleDeclineAppointment(appo.id)}
              >
                Odmietnuť
              </button>
              <button
              className="mt-4 button"
              onClick={() => handleDeleteAppointment(appo.id)}
              >
                Zrušiť
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[91vh] flex-col items-center p-10">
      <p className="text-3xl font-bold">Moje objednávky</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {userAppointments.map((appo) => (
          <div key={appo.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
            <div>{appo.doctorFirstName} {appo.doctorLastName}</div>
            <div>{appo.date} at {appo.time}</div>
            <div>
              {appo.confirmed == 0 ? (
                <span className="text-yellow-500">Neakceptované</span>
              ) : appo.confirmed === 1 ? (
                <span className="text-green-500">Akceptované</span>
              ) : (
                <span className="text-red-500">Neznáme</span>
              )}
            </div>
            <button
              className="mt-4 button"
              onClick={() => handleDeleteAppointment(appo.id)}
            >
              Zrušiť
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}