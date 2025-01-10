import { api } from "@/redux/api/appSlice";
import { IGroup } from "@/types/group";
import { IGroupMember } from "@/types/groupMember";

const groupApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createGroup: builder.mutation<
      { data: IGroup },
      Pick<IGroup, "name" | "description" | "image" | "privacy">
    >({
      query: (payload) => {
        return {
          url: `/group/create`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["group"],
    }),
    getUsersGroups: builder.query<
      { data: IGroup[]; totalDoc: number },
      Record<string, any>
    >({
      query: (query) => {
        const queryString = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join("&");
        return {
          url: `/group/get-my?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["group"],
    }),
    getGroupMembers: builder.query<
      { data: IGroupMember[]; totalDoc: number },
      { groupId: string; query: Record<string, any> }
    >({
      query: ({ query, groupId }) => {
        const queryString = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join("&");
        return {
          url: `/group/get-members/${groupId}?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["group"],
    }),
    getGroupDetailsById: builder.query<
      { data: { group: IGroup; member: IGroupMember } },
      string
    >({
      query: (groupId) => {
        return {
          url: `/group/get/${groupId}`,
          method: "GET",
        };
      },
      providesTags: ["group"],
    }),
    getGroupSuggesions: builder.query<
      { data: IGroup[]; totalDoc: number },
      Record<string, any>
    >({
      query: (query) => {
        const queryString = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join("&");
        return {
          url: `/group/get-suggestions?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["group"],
    }),
    updateGroupById: builder.mutation<
      { data: IGroup[]; totalDoc: number },
      { payload: Partial<IGroup>; groupId: string }
    >({
      query: ({ payload, groupId }) => {
        return {
          url: `/group//update/${groupId}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["group"],
    }),
  }),
});
export const {
  useCreateGroupMutation,
  useUpdateGroupByIdMutation,
  useGetGroupSuggesionsQuery,
  useGetGroupMembersQuery,
  useGetUsersGroupsQuery,
  useGetGroupDetailsByIdQuery,
} = groupApi;
