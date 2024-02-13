import { createDB } from "../lib/db"

async function getUserDetail(id: string) {
    const db = createDB()
  
    const user = await db.selectFrom('users').selectAll().where('id', '=', id).executeTakeFirstOrThrow()
  
    return user
}
export async function UserProfile({id}:{id: string}) {
  const user=await getUserDetail(id);
  
  return (
   <div>{id}</div>
  );
}
