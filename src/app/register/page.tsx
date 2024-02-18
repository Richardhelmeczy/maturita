"use client"

import { RegisterUser } from "../../components/RegisterForm";
import { useUserId } from "../../components/GetUser";

const Login = () => {
  const userId=useUserId()


  if (userId != '') {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <RegisterUser id={userId} />
      </main>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>please Login</p>
    </main>
  )
};

export default Login;
