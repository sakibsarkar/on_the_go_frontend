import { api } from "@/redux/api/appSlice";
import { ICategories } from "@/types/category";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<
      { data: ICategories[]; totalDoc: number },
      Record<string, any>
    >({
      query: (payload) => {
        const query = Object.keys(payload)
          .map((key) => `${key}=${payload[key]}`)
          .join("&");
        return {
          url: `/category/get?${query}`,
          method: "GET",
          keepUnusedDataFor: 0,
        };
      },

      providesTags: ["category"],
    }),
    getCategoriesByName: builder.query<
      { data: ICategories[]; totalDoc: number },
      string
    >({
      query: (name) => {
        return {
          url: `/category/get/${name}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),
  }),
});
export const { useGetAllCategoriesQuery, useGetCategoriesByNameQuery } =
  categoryApi;
