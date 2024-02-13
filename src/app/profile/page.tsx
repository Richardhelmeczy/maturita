"use client"
import { useUser } from "@clerk/nextjs";
import { useUserId } from "../../components/GetUser";
import { UserProfile } from "../../components/GetUserProfile";

export default function Userprofile() {
  const userId = useUserId()
  
  return (
    <p>{userId}</p>
  )
};
