import { TUser } from "./user";

export type TGroupPrivacy = "public" | "private";

export interface IGroup {
  _id: string;
  name: string;
  description: string;
  image: string;
  owner?: TUser;
  privacy: TGroupPrivacy;
  memberCount: number;
  createdAt: string;
}
