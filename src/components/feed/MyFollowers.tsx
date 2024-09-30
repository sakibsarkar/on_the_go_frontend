"use client";
import { useGetFollwersQuery } from "@/redux/features/follower/follower.api";
import { setFollowers } from "@/redux/features/follower/follower.slice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const MyFollowers = () => {
  const { data } = useGetFollwersQuery(undefined);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.data) {
      dispatch(setFollowers(data.data));
    }
  }, [data, dispatch]);

  return (
    <div>
      <h2 className="font-semibold my-4">Followers</h2>

      {data?.data?.map(({ follower }) => (
        <div key={follower._id} className="flex items-center mb-2 w-full">
          <Avatar className="w-[45px] h-[45px] mr-2">
            <AvatarImage
              src={follower.image}
              alt={follower.firstName}
              className="border-[1px] border-input overflow-hidden"
            />
            <AvatarFallback>{follower.firstName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-[14px] font-[600]">
            {follower.firstName} {follower.lastName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyFollowers;
