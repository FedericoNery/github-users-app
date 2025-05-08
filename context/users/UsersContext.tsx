import React, { ReactElement, ReactNode, useContext, useState } from 'react';

const useFavouriteUsers = () => {
    const [favouritesUsersIds, setFavouritesUsersIds] = useState<string[]>([]);

    const toggleFavouriteUser = (userId: string | undefined) => {
        if(!userId) return;

        setFavouritesUsersIds((prev: string[]) => {
            if (prev.includes(userId)) {
                return prev.filter((id) => id !== userId);
            } else {
                return [...prev, userId];
            }
        })
    }

    const isFavouriteUser = (userId: string | undefined): boolean => {
        return userId ? favouritesUsersIds.includes(userId) : false;
    }

    return { favouritesUsersIds, toggleFavouriteUser, isFavouriteUser };
}

export type UsersContextType = {
    searchUsernameValue: string;
    favouritesUsersIds: string[];
    setSearchUsernameValue: (value: string) => void;
    toggleFavouriteUser: (value: string | undefined) => void;
    isFavouriteUser: (value: string | undefined) => boolean;
};

export const UserContext = React.createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = (props: { children: ReactNode }): ReactElement => {
    const [searchUsernameValue, setSearchUsernameValue] = useState<string>('');
    const { favouritesUsersIds, toggleFavouriteUser, isFavouriteUser } = useFavouriteUsers()
    return <UserContext.Provider {...props} value={{ searchUsernameValue, favouritesUsersIds, setSearchUsernameValue, toggleFavouriteUser, isFavouriteUser }} />
}