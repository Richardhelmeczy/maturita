"use client"
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useUserId } from "../../components/GetUser";

const Login = () => {
  const { isSignedIn } = useUser();
  const userId = useUserId()

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="p-10 bg-white border border-gray-200 rounded-lg shadow">
          <div className="p-2">
            {!isSignedIn && <SignInButton />}
            {isSignedIn && (
              <>
                {userId} <br></br>
                <SignOutButton />
              </>
            )}
          </div>
          <div className="p-2">
            <a href="/register">
              Register
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
