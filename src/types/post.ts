import { ICategories } from "./category";
import { IGroup } from "./group";
import { IReaction } from "./reaction";
import { TUser } from "./user";

interface IPostReqired {
  content: string;
  images: string[];
  premium: boolean;
}

export interface IPostCreate extends IPostReqired {
  categories: string[];
  group?: string;
}

export interface IPost extends IPostReqired {
  _id: string;
  categories: ICategories[];
  group?: IGroup;
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
