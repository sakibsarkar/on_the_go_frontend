import { api } from "@/redux/api/appSlice";
import { IPost, TVoting } from "@/types/post";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<
      { data: IPost[]; totalDoc: number },
      Record<string, any>
    >({
      query: (payload) => {
        const query = Object.keys(payload)
          .map((key) => `${key}=${payload[key]}`)
          .join("&");
        return {
          url: `/post/get?${query}`,
          method: "GET",
        };
      },
      providesTags: ["post"],
    }),
    votePost: builder.mutation<
      { data: IPost },
      { postId: string; vote: TVoting }
    >({
      query: (payload) => {
        return {
          url: `/post/vote/${payload.postId}?vote=${payload.vote}`,
          method: "PATCH",
        };
      },
    }),
  }),
});
export const { useGetAllPostQuery, useVotePostMutation } = postApi;
