"use client";
import { useGetGroupSuggesionsQuery } from "@/redux/features/group/group.api";
import Image from "next/image";
import Link from "next/link";
import SmallGroupCardSkeleton from "../skeletons/SmallGroupCardSkeleton";
const GroupSuggestion = () => {
  const { data, isLoading } = useGetGroupSuggesionsQuery({ page: 1, limit: 5 });

  return (
    <div className="w-full max-h-[350px] overflow-y-auto smoothBar">
      <div className="flex items-start justify-between">
        <h2 className="font-semibold">Groups you may like</h2>
        <Link
          href="/group"
          className="text-primaryMat text-[13px] hover:underline"
        >
          View more
        </Link>
      </div>
      {data?.data?.length ? (
        <div className="flex flex-col gap-2 mt-[15px]">
          {data?.data?.map((group) => (
            <Link
              href={`/group/${group._id}`}
              key={group._id}
              className="flex items-center justify-start w-full gap-[8px] hover:bg-primaryMat/5 p-[5px] rounded-[8px] cursor-pointer"
            >
              <span className="w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <Image
                  alt={group.name}
                  src={group.image}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="text-[14px] font-[600] text-primaryTxt">
                {group.name || "nai vai"}
              </span>
            </Link>
          ))}
        </div>
      ) : isLoading ? (
        <div className="flex flex-col gap-2 bg-white p-[15px]">
          <SmallGroupCardSkeleton />
          <SmallGroupCardSkeleton />
          <SmallGroupCardSkeleton />
          <SmallGroupCardSkeleton />
        </div>
      ) : (
        "You don't have any groups to join 🔥"
      )}
    </div>
  );
};

export default GroupSuggestion;
