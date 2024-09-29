import { api } from "@/redux/api/appSlice";
import { IComment } from "@/types/comment";

const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<{ data: IComment[] }, string>({
      query: (postId) => {
        return {
          url: `/comment/get/${postId}`,
          method: "GET",
        };
      },
      providesTags: ["comment"],
    }),
    createComment: builder.mutation<
      { data: IComment[] },
      { postId: string; comment: string }
    >({
      query: ({ postId, comment }) => {
        return {
          url: `/comment/create/${postId}`,
          method: "POST",
          body: { comment },
        };
      },
      invalidatesTags: ["comment"],
    }),
    deteComment: builder.mutation<
      { data: IComment },
      string
    >({
      query: (commentId) => {
        return {
          url: `/comment/delete/${commentId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["comment"],
    }),
  }),
});
export const {
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
  useDeteCommentMutation,
} = commentApi;
