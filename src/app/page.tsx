"use client"

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useUserId } from "../components/GetUser";

export default function Home() {
  const { isSignedIn } = useUser();
  const userId = useUserId();

  return (
    <main className="flex flex-col h-[91vh] justify-center p-10 items-center">
      <h1 className="text-3xl font-bold">Vitajte na stránke NaČas</h1>
      <p>Prihlaste sa alebo nakupuje hned!</p>
      <div className="w-full h-fit mt-6 flex justify-center space-x-6 items-center">
        <Link className="w-[30%]" href="/doctors">
          <div className="w-[100%] h-fit bg-white p-6 rounded-xl flex justify-center flex-col items-center relative hover:shadow-lg hover:text-lg">
            <img
              src="/pictures/doktori.png"
              alt="Chcem sa objednať!"
              className="w-[95%]  "
            />
            <h4 className="font-semibold mt-3">Chcem sa objednať!</h4>
          </div>
        </Link>
        <Link className="w-[30%]" href="/shop">
          <div className="w-[100%] h-fit bg-white p-6 rounded-xl flex justify-center flex-col items-center relative hover:shadow-lg hover:text-lg">
            <img
              src="/pictures/chair.png"
              alt="Nakupuj hneď!"
              className="w-[95%]  "
            />
            <h4 className="font-semibold mt-3">Nakupuj hneď!</h4>
          </div>
        </Link>
        {userId && (
          <Link className="w-[30%]" href="/profile/myappointments">
            <div className="w-[100%] h-fit bg-white p-6 rounded-xl flex justify-center flex-col items-center relative hover:shadow-lg hover:text-lg">
              <img
                src="/pictures/kalendar.png"
                alt="Moje objednávky"
                className="w-[95%]  "
              />
              <h4 className="font-semibold mt-3">Moje objednávky</h4>
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}
