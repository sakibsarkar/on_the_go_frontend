import { TUser } from "./user";

export interface IPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  category: string;
  isPremium: boolean;
  user: TUser;
  createdAt: string;
  updatedAt: string;
}
