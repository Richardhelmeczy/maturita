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
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register('name')} />
      <label>Lastname</label>
      <input {...register('lastname')} />
      <input type="submit" value="Create" className="p-2" />
    </form>
  );
}
