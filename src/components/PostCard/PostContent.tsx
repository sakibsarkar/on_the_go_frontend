import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader } from "@/components/ui/card";
import { IPost } from "@/types/post";
import { format } from "date-fns";
import PostGallery from "./PostGallery";
const PostContent = ({ post }: { post: IPost }) => {
  return (
    <>
      <CardHeader className="flex flex-row items-center">
        <Avatar className="w-10 h-10 mr-4 border-[1px] border-secondary">
          <AvatarImage src={post.user?.image} alt={post.title} />
          <AvatarFallback>{post.user?.firstName?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">
            {post.user?.firstName} {post.user?.lastName}
          </h3>
          <p className="text-sm text-gray-500">
            {format(post.createdAt, "MMM dd, yyyy")}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        {post.images.length > 0 && (
          <PostGallery images={post.images} postId={post._id} />
        )}
      </CardContent>
    </>
  );
};

export default PostContent;
