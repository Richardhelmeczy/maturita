"use client"
import { createAppointment } from '../actions/create-appointment';
import { useUserId } from './GetUser';
import { useEffect, useState } from 'react';
import { getAppointments } from '../actions/get-appointments';

export function DoctorAppointment({ id }: { id: string }) {
  const userId = useUserId();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1); // JavaScript months are 0-indexed
  const [dates, setDates] = useState<string[]>([]);
  const [visibleDates, setVisibleDates] = useState<string[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const times = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  useEffect(() => {
    const fetchData = async () => {
      const profileAppointments = await getAppointments(id);
      setAppointments(profileAppointments);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const newDates = Array.from({ length: daysInMonth }, (_, i) => `${selectedYear}-${selectedMonth.toString().padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`);
    setDates(newDates);
    setVisibleIndex(0);
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    setVisibleDates(dates.slice(visibleIndex, visibleIndex + 7));
  }, [dates, visibleIndex]);

  const userHasAppointment = appointments?.some(appointment => appointment.userId === userId);


  const createAppointmentForSlot = async (date: string, time: string) => {
    if (userId && !userHasAppointment) {
      if (userId) {
        const appointmentData = {
          date,
          time,
        };
        await createAppointment(appointmentData, id, userId);
        const profileAppointments = await getAppointments(id);
        setAppointments(profileAppointments);
      }
    } else {
      alert("You've already booked an appointment.");
    }
  };

  const isSlotFull = (date: string, time: string) => {
    return appointments.some(appointment => {
      const appointmentDate = appointment.date;
      const appointmentTime = appointment.time;
      return appointmentDate === date && appointmentTime === time;
    });
  };

  const handlePrevClick = () => {
    setVisibleIndex(prevIndex => Math.max(0, prevIndex - 7));
  };

  const handleNextClick = () => {
    setVisibleIndex(prevIndex => Math.min(dates.length - 7, prevIndex + 7));
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden m-3">
        <select value={selectedMonth} onChange={e => setSelectedMonth(parseInt(e.target.value, 10))}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
        <select value={selectedYear} onChange={e => setSelectedYear(parseInt(e.target.value, 10))}>
          {Array.from({ length: 5 }, (_, i) => {
            const year = new Date().getFullYear() +i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <table className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden ">
        <thead>
          <tr>
            <th className='p-2'>Time</th>
            {visibleDates.map(date => (
              <th key={date} className='p-2'>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time}>
              <td className='pl-5'>{time}</td>
              {visibleDates.map(date => (
                <td key={date}className='px-2'>
                  {isSlotFull(date, time) ? (
                    <span className='bg-red-200 rounded-xl p-1 text-red-800 m-1 ml-7'>Full</span>
                  ) : (
                    <button className='bg-lime-200 rounded-xl p-1 m-1 ml-7'
                    onClick={() => createAppointmentForSlot(date, time)}
                    >Free</button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevClick} disabled={visibleIndex === 0} className='bg-blue-300 p-3 rounded-xl mx-3'>Prev</button>
        <button onClick={handleNextClick} disabled={visibleIndex >= dates.length - 7} className='bg-blue-300 p-3 rounded-xl mx-3'>Next</button>
      </div>
    </>
  );
}