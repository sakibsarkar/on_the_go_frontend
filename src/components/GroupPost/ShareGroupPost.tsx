"use client";
import CreatePostModal from "@/components/PostCreate/CreatePost";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hook";
const ShareGroupPost = () => {
  const { user } = useAppSelector((state) => state.auth);
  if (!user) {
    return;
  }

  return (
    <Card className="">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="p-[2px] border-[1px] border-borderColor">
            <AvatarImage
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <AvatarFallback>
              {user.firstName[0]}
              {user.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <CreatePostModal>
            <div className="w-full h-[40px] rounded-[8px] bg-primaryTxt/5 border-primaryTxt/10 border-[1px] flex items-center px-[15px] text-primaryTxt cursor-pointer hover:bg-primaryTxt/10">
              Share you story
            </div>
          </CreatePostModal>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShareGroupPost;
