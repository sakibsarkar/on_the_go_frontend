import { api } from "@/redux/api/appSlice";
import { IComment } from "@/types/comment";
import { IFollower } from "@/types/follwer";

const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFollwers: builder.query<{ data: IFollower[], totalDoc: number }, Record<string, any>>({
      query: (query) => {
        const queryString = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join("&");
        return {
          url: `/follower/get?${queryString}`,
          method: "GET",
          keepUnusedDataFor: 0,
        };
      },
      providesTags: ["follower"],
    }),
    getFollowingList: builder.query<
      { data: IFollower[]; totalDoc: number },
      Record<string, any>
    >({
      query: (query) => {
        const queryString = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join("&");
        return {
          url: `/follower/get/following?${queryString}`,
          method: "GET",
          keepUnusedDataFor: 0,
        };
      },
      providesTags: ["follower"],
    }),
    follow: builder.mutation<{ data: IFollower }, string>({
      query: (follower) => {
        return {
          url: `/follower/create`,
          method: "POST",
          body: { follower },
        };
      },
      invalidatesTags: ["follower"],
    }),
    unFollow: builder.mutation<{ data: IComment }, string>({
      query: (follower) => {
        return {
          url: `/follower/delete`,
          method: "PUT",
          body: { follower },
        };
      },
      invalidatesTags: ["follower"],
    }),
  }),
});
export const {
  useFollowMutation,
  useGetFollwersQuery,
  useUnFollowMutation,
  useGetFollowingListQuery,
} = commentApi;
