"use client";

import { useEffect, useState } from "react";
import { useUserId } from "../../components/GetUser";
import { userProfileInfo } from "../../actions/get-user-info";
import Link from "next/link";

export default function Userprofile() {
  const userId = useUserId();
  console.log(userId);
  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    if (userId !== "") {
      const fetchData = async () => {
        const profileDetail = await userProfileInfo(userId);
        setUserInfo(profileDetail);
      };
      fetchData();
    }
  }, [userId]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-800 mb-3">
            {userInfo?.name} {userInfo?.lastname}
          </div>
          <div className="mt-4 flex space-x-4"> {/* Adjusted for buttons to be next to each other */}
            <Link
              href="/profile/myappointments"
              className="inline-flex items-center justify-center h-10 px-6 font-semibold text-white transition-colors duration-150 bg-black rounded-md hover:bg-gray-800"
            >
              My Appointments
            </Link>
            <Link
              href="/profile/basket"
              className="inline-flex items-center justify-center h-10 px-6 font-semibold text-white transition-colors duration-150 bg-green-500 rounded-md hover:bg-green-700"
            >
              Basket
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
