import { ICategories } from "./category";
import { TUser } from "./user";

export interface IPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  categories: ICategories[];
  isPremium: boolean;
  user: TUser;
  upvotes: string[];
  downvotes: string[];
  upvoteCount: number;
  downvoteCount: number;
  createdAt: string;
  updatedAt: string;
}

export type TVoting = "upvote" | "downvote";
