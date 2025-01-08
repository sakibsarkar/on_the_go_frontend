import { useJoinGroupByGrupIdMutation } from "@/redux/features/groupMember/groupMember.api";
import { UsersRound } from "lucide-react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "../ui/button";

const GroupJoin = ({ groupId }: { groupId: string }) => {
  const [joinGroup, { isLoading }] = useJoinGroupByGrupIdMutation();
  const [isJoined, setIsJoined] = useState(false);
  const handleJoinGroup = async () => {
    try {
      const res = await joinGroup(groupId);
      const error = res.error as any;
      if (error) {
        toast.error(error.data?.message || "Something went wrong");
        return;
      }

      setIsJoined(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isJoined) {
    return <></>;
  }

  return (
    <Button
      onClick={handleJoinGroup}
      disabled={isLoading}
      variant="outline"
      className="bg-primaryMat/10 text-primaryMat border-primaryMat center gap-[8px]"
    >
      Join Group{" "}
      {isLoading ? (
        <FaSpinner className="spinner" />
      ) : (
        <UsersRound width={15} />
      )}{" "}
    </Button>
  );
};

export default GroupJoin;
