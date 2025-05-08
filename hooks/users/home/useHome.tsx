import { useUsers } from "@/context/users/useUsers";

type UseUsersHomeType = {
    searchUsernameValue: string;
    setSearchUsernameValue: (value: string) => void;
    toggleFavouriteUser: (value: string) => void;
    isFavouriteUser: (value: string) => boolean;
};

export function useHome(): UseUsersHomeType {
    const context = useUsers();
    const { searchUsernameValue, setSearchUsernameValue, toggleFavouriteUser, isFavouriteUser } = context;
    return { searchUsernameValue, setSearchUsernameValue, toggleFavouriteUser, isFavouriteUser };
}