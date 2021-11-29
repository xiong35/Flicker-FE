export type UserID = string;
export type UserPublic = {
  username: string;
  avatar: string;
  id: UserID;
};

export const DEFAULT_USER: UserPublic = {
  avatar: "",
  id: "",
  username: "",
};

export type UserDetail = {
  mail: string;
  password: string;
} & UserPublic;
