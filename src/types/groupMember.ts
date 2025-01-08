import { TUser } from "./user";
export type TGroupMemberRole = "owner" | "member" | "admin";
export interface IGroupMember {
  _id: string;
  user: TUser;
  group: string;
  role: TGroupMemberRole;
  createdAt: string;
}
