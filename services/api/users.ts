import { UserDetailsType, UserListType } from "@/types/users";
import { get } from "../httpClient";

const baseGithubApiUrl = 'https://api.github.com'

type GetUsersByUsernameType = {
  items: UserListType[];
}

export const getUsersByUsername = (username: String): Promise<GetUsersByUsernameType>  => {
  return get(`${baseGithubApiUrl}/search/users?q=${username}`);
};

export const getUserByUsername = (username: String): Promise<UserDetailsType> => {
  return get(`${baseGithubApiUrl}/users/${username}`)
};

export const getUsers = (): Promise<UserListType[]> => {
  return get(`${baseGithubApiUrl}/users`);
};