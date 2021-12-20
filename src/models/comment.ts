import { UserPublic } from "./user";

export type CommentID = string;

export type Comment = {
  id: CommentID;
  owner: UserPublic;
  comment: string;
  /** 秒时间戳 */
  lastupdate: string;
  likes: number;
  liked: boolean;
};
