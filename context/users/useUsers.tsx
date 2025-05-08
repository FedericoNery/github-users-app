import { UserContext, UsersContextType } from "@/context/users/UsersContext";
import { useContext } from "react";

export function useUsers(): UsersContextType {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("UserContext must be used within an UsersProvider");
    }
    return context;
}