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
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import CreatePost from "./CreatePost";
const FeedContent = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Pan Feng Shui",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "One of the perks of working in an international company is sharing knowledge with your colleagues",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      likes: 1250,
      comments: 26,
      shares: 311,
      time: "2 hours ago",
    },
    {
      id: 2,
      author: "Clara Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "A Great Way To Generate All The Motivation You Need To Get Fit",
      images: [],
      likes: 321,
      comments: 7,
      shares: 5,
      time: "4 hours ago",
    },
  ]);
  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <CreatePost />
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardHeader className="flex flex-row items-center">
            <Avatar className="w-10 h-10 mr-4">
              <AvatarImage src={post.avatar} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.author}</h3>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            {post.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {post.images.map((img, index) => (
                  <img
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
