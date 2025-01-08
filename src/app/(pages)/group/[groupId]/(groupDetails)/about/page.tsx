"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/hook";

const GroupAbout = () => {
  const { group } = useAppSelector((state) => state.group);
  if (!group) {
    return <></>;
  }
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">About this group</h2>
        <p className="mt-2 text-muted-foreground">{group?.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Admin</h2>
        <div className="mt-2 flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={group?.owner?.image}
              alt={`${group?.owner?.firstName} ${group?.owner?.lastName}`}
            />
            <AvatarFallback>
              {group?.owner?.firstName[0]}
              {group?.owner?.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">
              {group?.owner?.firstName} {group?.owner?.lastName}
            </p>
            <p className="text-sm text-muted-foreground">Group Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAbout;
