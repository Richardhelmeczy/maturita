"use client"

import { RegisterUser } from "../../components/RegisterForm";
import { useUserId } from "../../components/GetUser";

const Login = () => {
  const userId=useUserId()


  if (userId != '') {
    return (
      <main className="flex h-[91vh] flex-col items-center justify-center">
          <RegisterUser id={userId} />
      </main>
    )
  }
  return (
    <main className="flex h-[91vh] flex-col items-center justify-center">
      <p>Prihláste sa prosím.</p>
    </main>
  )
};

export default Login;
