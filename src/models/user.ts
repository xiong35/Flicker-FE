export type UserID = string;
export type UserPublic = {
  username: string;
  password: string;
  id: UserID;
};

export type UserDetail = {
  main: string;
  password: string;
};
