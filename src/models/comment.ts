import { UserPublic } from "./user";

export type CommentID = string;

export type Comment = {
  id: CommentID;
  owner: UserPublic;
  comment: string;
};
