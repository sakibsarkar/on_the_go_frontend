import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader } from "@/components/ui/card";
import { IPost } from "@/types/post";
import { format } from "date-fns";
import PostGallery from "./PostGallery";
import PostOptions from "./PostOptions";
import { ProfileHoverCard } from "./ProfileCard";
const PostContent = ({ post }: { post: IPost }) => {
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Avatar className="w-10 h-10 mr-4 border-[1px] border-secondary">
            <AvatarImage src={post.user?.image} alt={post.user?.firstName} />
            <AvatarFallback>{post.user?.firstName?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <ProfileHoverCard user={post.user} />
            <p className="text-sm text-gray-500">
              {format(post.createdAt, "MMM dd, yyyy")}
            </p>
          </div>
        </div>
        <PostOptions post={post} />
      </CardHeader>
      <CardContent>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="mb-4 reset-all"
        />
        {post.images.length > 0 && (
          <PostGallery images={post.images} postId={post._id} />
        )}
      </CardContent>
    </>
  );
};

export default PostContent;
