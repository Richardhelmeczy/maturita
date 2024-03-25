"use client";

import { useEffect, useState } from "react";
import { userProfileInfo } from "../actions/get-user-info";
import { useUserId } from "./GetUser";

interface UserInfo {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    adress: string;
    phone: string;
}

export default function Userprofile() {
  const userId = useUserId();
  console.log(userId);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (userId !== "") {
      const fetchData = async () => {
        const profileDetail = await userProfileInfo(userId);
        setUserInfo(profileDetail);
      };
      fetchData();
    }
  }, [userId]);

  return userInfo;
}
