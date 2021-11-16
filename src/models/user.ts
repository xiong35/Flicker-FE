export type UserID = string;
export type UserPublic = {
  username: string;
  avatar: string;
  id: UserID;
};

export type UserDetail = {
  mail: string;
  password: string;
} & UserPublic;
