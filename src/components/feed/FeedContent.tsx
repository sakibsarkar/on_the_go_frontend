"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllPostQuery } from "@/redux/features/post/post.api";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
const FeedContent = () => {
  const { data, isLoading } = useGetAllPostQuery({ page: 1, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  const posts = data?.data || [];

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <CreatePost />
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </ScrollArea>
  );
};

export default FeedContent;
