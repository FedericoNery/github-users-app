import { getUserByUsername } from "@/services/api/users";
import { UserDetailsType } from "@/types/users";
import { useEffect, useState } from "react";

export function useFetchUserDetails(username: string) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<UserDetailsType | null>(null);

  const fetchUserByUsername = async () => {
    try {
      const response = await getUserByUsername(username);
      setData(response);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserByUsername();

    return () => {
      setLoading(true);
      setError(false);
      setData(null);
    }
  }, [username]);

  return { isLoading, isError, data };
}
