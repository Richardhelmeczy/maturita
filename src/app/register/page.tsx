"use client"
import { useUser } from "@clerk/nextjs";
import { RegisterUser } from "../../components/RegisterForm";

const Login = () => {
  const { user, isSignedIn } = useUser();


  if (isSignedIn && user) {
    const userId = user.id; 
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
