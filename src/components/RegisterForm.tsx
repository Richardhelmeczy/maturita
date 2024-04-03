"use client"
import { useForm } from 'react-hook-form';
import { createUser } from '../actions/create-user';

type FormData = {
  name: string;
  lastname: string;
};

export function RegisterUser({id}:{id: string}) {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await createUser(data, id);

  });

  return (
    <form className="flex flex-col mx-auto bg-white shadow-md rounded-lg p-8 " onSubmit={onSubmit}>
      <label>Meno</label>
      <input {...register('name')} className='border-2 border-l-slate-200' />
      <label>Priezvisko</label>
      <input {...register('lastname')} className='border-2 border-l-slate-200' />
      <input type="submit" value="Vytvoriť" className="p-2 button mt-4 mx-auto" />
    </form>
  );
}
