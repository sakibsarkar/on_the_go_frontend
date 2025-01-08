"use client";
import { useGetUsersGroupsQuery } from "@/redux/features/group/group.api";
import { UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const MyGroups = () => {
  const [query, setQuery] = useState({ page: 1, limit: 5 });
  const { data, isLoading } = useGetUsersGroupsQuery(query);

  return (
    <div className="w-full">
      <div className="w-full flex items-start justify-between my-4">
        <h2 className="font-semibold">My Groups</h2>
        {data?.data.length ? (
          <button
            onClick={() => setQuery({ ...query, limit: data?.totalDoc || 999 })}
            className="text-primaryMat text-[13px]"
          >
            See all
          </button>
        ) : (
          ""
        )}
      </div>
      {!isLoading && data?.data?.length ? (
        <div className="flex flex-col gap-2">
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
      ) : (
        <Link
          href="/group/create"
          className="w-fit px-[15px] py-[5px] center gap-[5px] bg-primaryMat/10 text-primaryMat rounded-[5px] border-[1px] border-primaryMat/20"
        >
          Create your first group <UsersRound width={15} />
        </Link>
      )}
    </div>
  );
};

export default MyGroups;
