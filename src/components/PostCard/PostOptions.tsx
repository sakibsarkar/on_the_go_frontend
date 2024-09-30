import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/redux/hook";
import { IPost } from "@/types/post";
import { EllipsisVertical, Eye, Pencil, Share2, Trash } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import DeletePost from "./actions/DeletePost";
import { useState } from "react";
const PostOptions = ({ post }: { post: IPost }) => {
  const { user } = useAppSelector((state) => state.auth);
  const isAuthor = user && post.user?._id === user._id;
  const [_, copy] = useCopyToClipboard();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    await copy(url + "/post/" + post._id);
    toast.success("Shareable Link copied to clipboard");
  };

  return (
    <>
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size={"icon"}>
            <EllipsisVertical width={15} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={handleShare}
              className="flex items-center gap-[5px]"
            >
              <Share2 width={15} />
              Share
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-[5px]">
              <Eye width={15} /> View Post
            </DropdownMenuItem>
            {isAuthor ? (
              <>
                <DropdownMenuItem className="flex items-center gap-[5px]">
                  <Pencil width={15} /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-[5px]" onClick={() => setOpenDeleteModal(true)}>
                  <Trash width={15} />
                  Delete
                </DropdownMenuItem>
              </>
            ) : (
              ""
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeletePost id={post._id} isOpen={openDeleteModal} setIsOpen={setOpenDeleteModal}/>
    </>
  );
};

export default PostOptions;
