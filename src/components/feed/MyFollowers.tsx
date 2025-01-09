"use client";
import { useGetFollwersQuery } from "@/redux/features/follower/follower.api";
import { setFollowers } from "@/redux/features/follower/follower.slice";
import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const MyFollowers = ({ heading = true }: { heading?: boolean }) => {
  const { data } = useGetFollwersQuery({ page: 1, limit: 10 });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.data) {
      dispatch(setFollowers(data.data));
    }
  }, [data, dispatch]);

  return (
    <div>
      {heading ? <h2 className="font-semibold my-4">Followers</h2> : ""}

      <div className="flex flex-col gap-[15px]">
        {data?.data?.map(({ follower }) => (
          <Link
            key={follower._id}
            href={`/${follower._id}`}
            className="flex items-center w-full p-[10px] border-[1px] border-input rounded-[8px] bg-white"
          >
            <Avatar className="w-[35px] h-[35px] mr-2">
              <AvatarImage
                src={follower.image}
                alt={follower.firstName}
                className="border-[1px] border-input overflow-hidden"
              />
              <AvatarFallback>{follower.firstName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-[12px] font-[600]">
              {follower.firstName} {follower.lastName}
            </span>
          </Link>
        ))}
      </div>

      {data?.data && data?.data?.length < 1 ? (
        <div>
          <p className="text-center text-[17px] font-[700]">No Follower</p>
          <p className="text-center text-[14px]">
            Upload your adventure post on newsfeed reach more followers
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyFollowers;
