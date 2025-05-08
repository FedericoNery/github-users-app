export type UserListType = {
    id: string;
    login: string;
    avatar_url: string;
}

export type UserDetailsType = {
  id: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  twitter_username: string;
  location: string;
  email: string;
};