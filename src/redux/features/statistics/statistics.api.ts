import { api } from "@/redux/api/appSlice";
import { IPaymentData } from "@/types/payment";
import { ITopUserStatistics, IUserStatistics } from "@/types/statistics";
import { DateRange } from "react-day-picker";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentStatistics: builder.query<
      { data: IPaymentData[] },
      DateRange | undefined
    >({
      query: (payload) => {
        const query = Object.keys(payload || {})
          // @ts-ignore
          .map((key) => `${key}=${payload[key].toISOString()}`)
          .join("&");

        return {
          url: `/statistics/payment?${query}`,
          method: "GET",
        };
      },
      providesTags: ["statistics"],
    }),
    getUserStatistics: builder.query<{ data: IUserStatistics }, undefined>({
      query: () => {
        return {
          url: `/statistics/user`,
          method: "GET",
        };
      },
      providesTags: ["statistics"],
    }),
    getTopUsersStatistics: builder.query<
      {
        data: ITopUserStatistics[];
      },
      undefined
    >({
      query: () => {
        return {
          url: `/statistics/top-user`,
          method: "GET",
        };
      },
      providesTags: ["statistics"],
    }),
    getRecentStatistics: builder.query<
      { data: { date: string; amount: number }[] },
      undefined
    >({
      query: () => {
        return {
          url: `/statistics/recent`,
          method: "GET",
        };
      },
      providesTags: ["statistics"],
    }),
  }),
});
export const {
  useGetPaymentStatisticsQuery,
  useGetTopUsersStatisticsQuery,
  useGetUserStatisticsQuery,
  useGetRecentStatisticsQuery,
} = categoryApi;
