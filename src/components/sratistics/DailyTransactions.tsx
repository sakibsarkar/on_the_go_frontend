"use client";
import { useGetRecentStatisticsQuery } from "@/redux/features/statistics/statistics.api";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
const DailyTransactions = () => {
  const { data } = useGetRecentStatisticsQuery(undefined);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent 30 days transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data?.data || []}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3bb77e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DailyTransactions;
