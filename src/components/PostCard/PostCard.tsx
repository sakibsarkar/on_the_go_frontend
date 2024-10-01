import { Card, CardFooter } from "@/components/ui/card";
import { IPost } from "@/types/post";
import PostContent from "./PostContent";
import PostModal from "./PostModal";
import VotePost from "./actions/VotePost";

interface IPorps {
  post: IPost;
  className?: string;
  showFooterItems?: boolean;
  children?: React.ReactNode;
}

const PostCard: React.FC<IPorps> = ({
  post,
  className,
  showFooterItems = true,
  children,
}) => {
  return (
    <Card className={`mb-4 ${className || ""}`} id={`post-${post._id}`}>
      <PostContent post={post} />
      <CardFooter className="flex flex-col justify-start items-start">
        {showFooterItems ? (
          <div className="flex items-center justify-between w-full">
            <VotePost post={post} />
            <PostModal post={post} />
          </div>
        ) : (
          ""
        )}
        {children ? children : <></>}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
