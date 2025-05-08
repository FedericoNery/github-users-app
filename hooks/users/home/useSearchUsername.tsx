import { useUsers } from "@/context/users/useUsers";
import useDebounce from "@/hooks/useDebounce";

type UseSearchUsernameType = {
    debouncedSearchUsernameValue: string;
    searchUsernameValue: string;
    setSearchUsernameValue: (value: string) => void;
};

export function useSearchUsername(): UseSearchUsernameType {
    const context = useUsers();
    const { searchUsernameValue, setSearchUsernameValue } = context;
    const debouncedSearchUsernameValue = useDebounce(searchUsernameValue);
    return { debouncedSearchUsernameValue, searchUsernameValue, setSearchUsernameValue };
}