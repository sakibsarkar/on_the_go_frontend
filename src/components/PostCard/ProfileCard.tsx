import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TUser } from "@/types/user";
import { CalendarDays, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
const ProfileCard = ({ user }: { user: TUser }) => {
  return (
    <div className="flex justify-start space-x-4">
      <Avatar>
        <AvatarImage src={user.image} />
        <AvatarFallback>{user.firstName.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[10px]">
        <h4 className="text-sm font-semibold">
          {user.firstName} {user.lastName}
        </h4>
        <div className="flex items-center">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
        <Button size="sm">
          <UserPlus className="mr-2 h-4 w-4" />
          Follow
        </Button>
      </div>
    </div>
  );
};

export const ProfileHoverCard = ({ user }: { user: TUser }) => {
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <h3 className="font-semibold hover:underline cursor-pointer">
          {user?.firstName} {user?.lastName}
        </h3>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <ProfileCard user={user} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileCard;
