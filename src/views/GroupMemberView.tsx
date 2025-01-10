"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useGetGroupMembersQuery } from "@/redux/features/group/group.api";
import { IGroupMember } from "@/types/groupMember";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const GroupMemberView = () => {
  const { groupId } = useParams();
  const [query, setQuery] = useState({ page: 1, limit: 10 });
  const { data, isFetching } = useGetGroupMembersQuery({
    groupId: groupId as string,
    query: query,
  });

  const [memberData, setMemberData] = useState<IGroupMember[]>([]);

  useEffect(() => {
    if (data?.data) {
      const newMemberData = data.data || [];
      setMemberData([...memberData, ...newMemberData]);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-[15px] bg-white w-full rounded-[8px] p-[15px]">
      <h1 className="text-lg font-semibold">Group Members</h1>
      <div className="flex flex-col gap-[15px]">
        {memberData?.map((member) => {
          const roleText =
            member?.role === "admin"
              ? "Group Admin"
              : member?.role === "owner"
              ? "Group Owner"
              : "Member";
          return (
            <div key={member._id}>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={member?.user.image}
                    alt={`${member?.user.firstName} ${member?.user.lastName}`}
                  />
                  <AvatarFallback>
                    {member?.user.firstName[0]}
                    {member?.user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">
                    {member?.user.firstName} {member?.user.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {roleText} · Joined{" "}
                    {format(member?.createdAt || new Date(), "MMM dd, yyyy")}
                  </p>
                </div>
              </div>
              <Separator className="mt-[15px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupMemberView;
