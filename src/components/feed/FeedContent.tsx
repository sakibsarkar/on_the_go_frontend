"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllPostQuery } from "@/redux/features/post/post.api";
import { IPost } from "@/types/post";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import PostCardSkeleton from "../skeletons/PostCardSkeleton";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const FeedContent = () => {
  const [page, setPage] = useState(1); // Track current page
  const [posts, setPosts] = useState<IPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, isLoading, isFetching } = useGetAllPostQuery({
    page,
    limit: 10,
  });

  // Fetch posts and append to the list when data changes
  useEffect(() => {
    if (data?.data) {
      setHasMore(posts.length !== data.totalDoc);
      setPosts((prevPosts) => [...prevPosts, ...data.data]); // Append new posts
    }
  }, [data]);

  // Handler for loading the next page when the last post is in view
  const handleLoadMore = (inView: boolean) => {
    if (!hasMore) return;
    if (inView && !isFetching) {
      setPage((prevPage) => prevPage + 1); // Load next page when in view
    }
  };

  const Skeletons = (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </>
  );

  if (isLoading && page === 1) return <div className="w-full">{Skeletons}</div>;

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <CreatePost />

      {posts.map((post, i) => {
        // For the last post, use the InView component to trigger loading more
        if (i === posts.length - 1) {
          return (
            <InView key={post._id} onChange={handleLoadMore}>
              <PostCard post={post} />
            </InView>
          );
        }
        return <PostCard post={post} key={post._id} />;
      })}

      {isFetching && Skeletons}
    </ScrollArea>
  );
};

export default FeedContent;
