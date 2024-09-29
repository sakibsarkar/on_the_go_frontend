"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useCreateCommentMutation,
  useGetCommentsByPostIdQuery,
} from "@/redux/features/comment/comment.api";
import { IPost } from "@/types/post";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import CommentCard from "../commentCard/CommentCard";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import PostContent from "./PostContent";
const PostModal = ({ post }: { post: IPost }) => {
  const { data } = useGetCommentsByPostIdQuery(post._id);
  const [createComment] = useCreateCommentMutation();

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Please wait");
    try {
      const form = e.target as HTMLFormElement;
      const comment = form.comment.value;
      if (!comment) return;
      await createComment({ comment, postId: post._id });
      form.reset();
      toast.dismiss(toastId);
      toast.success("Comment created successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="ghost">
          <MessageCircle className="mr-1 h-4 w-4" />
          Comments: {post.commentCount || 0}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] h-[80vh] overflow-auto smoothBar px-[10px]">
        <DialogHeader></DialogHeader>
        <Card>
          <PostContent post={post} />
        </Card>
        <Separator />

        <form className="mb-6" onSubmit={handleComment}>
          <div className="flex items-start space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage alt="Your Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Write a comment..."
                name="comment"
                className="w-full min-h-[80px] "
              />
              <Button type="submit" className="mt-2">
                Post Comment
              </Button>
            </div>
          </div>
        </form>

        <h3>{data?.data?.length} Comments:</h3>
        {data?.data?.map((comment, i) => (
          <CommentCard comment={comment} key={i} />
        ))}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PostModal;
