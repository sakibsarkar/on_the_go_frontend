import { api } from "@/redux/api/appSlice";
import { TReactionType } from "@/types/reaction";

const reactionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    changePostReaction: builder.mutation<
      { data: unknown },
      { postId: string; reactionId: TReactionType }
    >({
      query: (payload) => {
        return {
          url: `/reaction/change`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["reaction"],
    }),
  }),
});
export const { useChangePostReactionMutation } = reactionApi;
