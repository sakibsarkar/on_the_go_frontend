import { api } from "@/redux/api/appSlice";
import { IPost } from "@/types/post";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPost: builder.query<{ data: IPost[] }, Record<string, any>>({
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
  }),
});
export const { useGetAllPostQuery } = postApi;
