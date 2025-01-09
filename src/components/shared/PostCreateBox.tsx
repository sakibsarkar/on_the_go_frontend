"use client";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import CreatePostModal from "../PostCreate/CreatePost";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
const PostCreateBox = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-start gap-[5px] w-full">
              <Avatar className="p-[2px] border-[1px] border-borderColor">
                <AvatarImage
                  src={user?.image}
                  alt={`${user?.firstName} ${user?.lastName}`}
                />
                <AvatarFallback>
                  <img src="/images/avatar.jpg" />
                </AvatarFallback>
              </Avatar>
              <CreatePostModal>
                <div className="w-full h-[40px] rounded-[8px] bg-primaryTxt/5 border-primaryTxt/10 border-[1px] flex items-center px-[15px] text-primaryTxt cursor-pointer hover:bg-primaryTxt/10">
                  Share you story
                </div>
              </CreatePostModal>
            </div>
            <Separator />
            <div className="flex items-center gap-2 justify-between">
              <CreatePostModal>
                <button className="py-[10px] w-full hover:bg-primaryMat/5 center gap-[5px] text-[16px] font-[500]">
                  <Image
                    src={"/icons/travel.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />{" "}
                  Travel Photos
                </button>
              </CreatePostModal>
              <CreatePostModal>
                <button className="py-[10px] w-full hover:bg-primaryMat/5 center gap-[5px] text-[16px] font-[500]">
                  <Image
                    src={"/icons/adventure.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                  Recent Adventure
                </button>
              </CreatePostModal>
              <CreatePostModal>
                <button className="py-[10px] w-full hover:bg-primaryMat/5 center gap-[5px] text-[16px] font-[500]">
                  <Image
                    src={"/icons/storyBook.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                  Story Book
                </button>
              </CreatePostModal>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreateBox;
