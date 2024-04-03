"use client";
import Link from "next/link";
import UserProfile from "../../components/Profile";
import { useUserId } from "../../components/GetUser";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Profile() {
  const { isSignedIn } = useUser();
  const userId = useUserId();
  const userInfo = UserProfile();

  return (
    <main className="flex h-[91vh] flex-col items-center justify-center">
      <div className="mx-auto bg-white shadow-md rounded-lg">
        <div className="p-8 flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-800 mb-3">
            {userInfo?.firstname} {userInfo?.lastname}
          </div>
          <div className="mt-4 flex space-x-4">
            <Link
              href="/profile/myappointments"
              className="inline-flex items-center justify-center h-10 px-6 font-semibold text-[#96C8FF] transition-colors duration-150 bg-white border-2 border-[#96C8FF] rounded-md hover:bg-[#96C8FF] hover:text-white"
            >
              Moje objednávky
            </Link>
            <Link
              href="/profile/basket"
              className="inline-flex items-center justify-center h-10 px-6 font-semibold text-[#96C8FF] transition-colors duration-150 bg-white border-2 border-[#96C8FF] rounded-md hover:bg-[#96C8FF] hover:text-white"
            >
              Košík
            </Link>
          </div>
          <div className="w-[25vw] h-[2px] mt-5 mb-3 bg-slate-200"></div>
          {isSignedIn && (
            <div className="flex items-center justify-center">
              <div className="p-2 flex items-center">
                {!isSignedIn && <SignInButton />}
                {isSignedIn && (
                  <>
                    <div className="button">
                      <SignOutButton>Odhlásiť sa</SignOutButton>
                    </div>
                  </>
                )}
              </div>
              <div className="p-2">
                <a href="/register" className="button">
                  Registrovať sa
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
