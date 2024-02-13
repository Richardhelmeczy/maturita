// hooks/useUserId.js or where it's located in your project
import { useUser } from "@clerk/nextjs";

// This is now a custom hook
export const useUserId = () => {
  const user = useUser();
  return user.isSignedIn ? user.user.id : "";
};
