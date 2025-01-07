import { ICategories } from "./category";
import { IReaction } from "./reaction";
import { TUser } from "./user";

interface IPostReqired {
  content: string;
  images: string[];
  premium: boolean;
}

export interface IPostCreate extends IPostReqired {
  categories: string[];
}

export interface IPost extends IPostReqired {
  _id: string;
  categories: ICategories[];
  user: TUser;
  upvotes: string[];
  downvotes: string[];
  reactionCount: number;
  commentCount: number;
  reacted?: IReaction;
  createdAt: string;
  updatedAt: string;
}

export type TVoting = "upvote" | "downvote";
