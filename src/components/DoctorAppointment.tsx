"use client"
import { useForm } from 'react-hook-form';
import { createAppointment } from '../actions/create-appointment';
import { useUser } from '@clerk/nextjs';

type FormData = {
  name: string;
  lastname: string;
  date: string;
};

export function DoctorAppointment({ id }: { id: number }) {
  const { register, handleSubmit } = useForm<FormData>();
  const { user, isSignedIn } = useUser();
  
  let userId: string | undefined = undefined;
  
  if (isSignedIn && user) {
    userId = user.id;
  }

  const onSubmit = handleSubmit(async (data) => {
    if (userId) {
      await createAppointment(data, id, userId);
    }
  });

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name')} required/>
      <label htmlFor="lastname">Lastname</label>
      <input id="lastname" {...register('lastname')} required/>
      <label htmlFor="date">Date</label>
      <input id="date" {...register('date')} type="date" required />
      <input type="submit" value="Create"/>
    </form>
  );
}
