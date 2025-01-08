"use client";

import { useAppSelector } from "@/redux/hook";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import CreatePostModal from "../PostCreate/CreatePost";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import FolowingList from "./FolowingList";
import MyFollowers from "./MyFollowers";
const ContentBar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full bg-white p-4 hidden lg:block">
      <h2 className="font-semibold mb-4">Seemed Stories</h2>

      {user ? (
        <CreatePostModal />
      ) : (
        <Button
          variant="outline"
          className="w-full mb-4 bg-primaryMat text-white"
          onClick={() => toast.error("Login first to create post")}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Your Story
        </Button>
      )}
      <Separator className="my-4" />
      <MyFollowers />
      <Separator className="my-4" />
      <FolowingList />
    </div>
  );
};

export default ContentBar;
