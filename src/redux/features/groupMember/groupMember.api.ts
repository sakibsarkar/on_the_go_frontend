import { api } from "@/redux/api/appSlice";
import { IGroupMember } from "@/types/groupMember";

const groupMemberApi = api.injectEndpoints({
  endpoints: (builder) => ({
    joinGroupByGrupId: builder.mutation<{ data: IGroupMember }, string>({
      query: (groupId) => {
        return {
          url: `/group-member/join-group/${groupId}`,
          method: "POST",
        };
      },
      invalidatesTags: ["group"],
    }),
  }),
});
export const { useJoinGroupByGrupIdMutation } = groupMemberApi;
