import { useUsers } from "@/context/users/useUsers";

type UseFavouriteUsersType = {
    isFavouriteUser: (value: string | undefined) => boolean;
    toggleFavouriteUser: (value: string | undefined) => void;
};

export function useFavouriteUsers(): UseFavouriteUsersType {
    const context = useUsers();
    const { toggleFavouriteUser, isFavouriteUser } = context;
    return { toggleFavouriteUser, isFavouriteUser };
}