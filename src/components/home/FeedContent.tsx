"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllPostQuery } from "@/redux/features/post/post.api";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import CreatePost from "./CreatePost";
const FeedContent = () => {
  const { data, isLoading } = useGetAllPostQuery({ page: 1, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  const posts = data?.data || [];

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <CreatePost />
      {posts.map((post) => (
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
              <div className="grid grid-cols-3 gap-2">
                {post.images.map((img, index) => (
                  <Image
                    width={600}
                    height={600}
                    key={index}
                    src={img}
                    alt={`Post image ${index + 1}`}
                    className="rounded-lg"
                  />
                ))}
              </div>
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
      ))}
    </ScrollArea>
  );
};

export default FeedContent;
