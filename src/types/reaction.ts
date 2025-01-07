import { IPost } from "./post";

export type TReactionType = "like" | "love" | "haha" | "wow" | "sad" | "angry";

export interface IReaction {
  reactionId: TReactionType;
  post?: IPost;
  user?: IPost;
  createdAt: string;
  updatedAt: string;
}
