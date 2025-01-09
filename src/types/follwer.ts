import { TUser } from "./user";

export interface IFollower {
  _id: string;
  user: TUser;
  follower: TUser;
  createdAt: string;
}
