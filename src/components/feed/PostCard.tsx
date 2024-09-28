"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Gallery from "./Gallery";
import { IPost } from "@/types/post";
const PostCard = ({post}:{post:IPost}) => {
  return (
    <Card key={post._id} className="mb-4">
      <CardHeader className="flex flex-row items-center">
        <Avatar className="w-10 h-10 mr-4 border-[1px] border-secondary">
          <AvatarImage src={post.user?.image} alt={post.title} />
          <AvatarFallback>{post.user?.firstName?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">
            {post.user?.firstName} {post.user?.lastName}
          </h3>
          <p className="text-sm text-gray-500">{post.createdAt}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        {post.images.length > 0 && (
          <Gallery images={post.images} postId={post._id} />
        )}
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">
          <Heart className="mr-2 h-4 w-4" />
          {post.likes} Likes
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          {post.comments} Comments
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          {post.shares} Shares
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
