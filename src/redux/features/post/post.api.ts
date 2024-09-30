import { api } from "@/redux/api/appSlice";
import { IPost, IPostCreate, TVoting } from "@/types/post";

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
          keepUnusedDataFor: 0,
        };
      },
      providesTags: ["post"],
    }),
    cratePost: builder.mutation<
      { data: IPost[]; totalDoc: number },
      IPostCreate
    >({
      query: (payload) => {
        return {
          url: `/post/create`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["post"],
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
export const { useGetAllPostQuery, useVotePostMutation, useCratePostMutation } =
  postApi;
