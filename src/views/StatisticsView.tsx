import DailyTransactions from "@/components/sratistics/DailyTransactions";
import PaymentStatistics from "@/components/sratistics/PaymentStatistics";
import StatisticsHeading from "@/components/sratistics/StatisticsHeading";
import TopUsersTable from "@/components/sratistics/TopUsersTable";
import UserStatistics from "@/components/sratistics/UserStatistics";
import UserStatisticsPieChart from "@/components/sratistics/UserStatisticsPieChart";
const StatisticsView = () => {
  return (
    <div className="w-full">
      <StatisticsHeading />
      <DailyTransactions />
      <div className="flex items-start flex-col xl:flex-row gap-[20px] my-[20px]">
        <div className="flex flex-col gap-[20px] w-full">
          <UserStatisticsPieChart />
          <UserStatistics />
        </div>
        <TopUsersTable />
      </div>
      <PaymentStatistics />
    </div>
  );
};

export default StatisticsView;
