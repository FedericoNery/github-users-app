import { getUsers, getUsersByUsername } from "@/services/api/users";
import { useEffect, useState } from "react";
import { useSearchUsername } from "./useSearchUsername";
import { UserListType } from "@/types/users";

export function useFetchUsersList() {
  const { debouncedSearchUsernameValue } = useSearchUsername();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<UserListType[]>([]);

  const fetchUsers = async () => {
    try {
        if(debouncedSearchUsernameValue !== "") {
            const response = await getUsersByUsername(debouncedSearchUsernameValue);
            setData(response.items);
        }
        else{
            const response = await getUsers();
            setData(response);
        }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [debouncedSearchUsernameValue]);

  return { isLoading, isError, data };
}
