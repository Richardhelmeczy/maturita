"use client";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useUserId } from "../../components/GetUser";

const Login = () => {
  const { isSignedIn } = useUser();
  const userId = useUserId();

  return (
    <>
      <main className="flex h-[91vh] flex-col justify-center items-center p-24">
        <div className="p-10 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center">
          <div className="p-2 flex flex-col items-center">
            {!isSignedIn && (
              <div className="button">
                <SignInButton redirectUrl="/profile" />
              </div>
            )}
            {isSignedIn && (
              <>
                <div className="flex">
                  <div className="font-bold italic mr-2">Užívateľ:</div>
                  {userId}{" "}
                </div>
                <div className="button mt-2">
                  <SignOutButton />
                </div>
              </>
            )}
          </div>
          <div className="p-2">
            <div className="flex items-baseline mb-8 pb-6 border-b border-slate-200"></div>
            <a href="/register" className="button">
              Register
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
