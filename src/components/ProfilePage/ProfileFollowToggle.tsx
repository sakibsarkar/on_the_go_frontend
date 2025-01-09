import { useFollowMutation } from "@/redux/features/follower/follower.api";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface IProps {
  isFollowing: boolean;
  userId?: string;
}

const ProfileFollowToggle: React.FC<IProps> = ({
  isFollowing: _isFollowing,
  userId: uid,
}) => {
  const [followUnfollow, { isLoading }] = useFollowMutation();
  const [isFollowing, setIsFollowing] = useState(_isFollowing);

  const { userId } = useParams();

  const handleToggleFollow = async () => {
    const id = userId || uid;
    if (!id) return;
    const res = await followUnfollow(id as string);
    const error = res.error as any;
    if (error) toast.error(error.data?.message || "Something went wrong");
    setIsFollowing(!isFollowing);
    const followerCountElement = document.getElementById(
      "follower_count_profile"
    ) as HTMLSpanElement | null;
    const newValue = followerCountElement
      ? Number(followerCountElement.innerText) + (isFollowing ? -1 : 1)
      : 0;
    if (followerCountElement) followerCountElement.innerText = String(newValue);
  };
  return (
    <div>
      <button onClick={handleToggleFollow} disabled={isLoading}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default ProfileFollowToggle;
