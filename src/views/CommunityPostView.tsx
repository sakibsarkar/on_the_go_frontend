"use client";
import DeleteCommunityPost from "@/components/ManageCommunityPost/DeleteCommunityPost";
import PostCard from "@/components/PostCard/PostCard";
import PostModal from "@/components/PostCard/PostModal";
import OntheGoPagination from "@/components/shared/OntheGoPagination";
import { Button } from "@/components/ui/button";
import { useGetAllPostQuery } from "@/redux/features/post/post.api";
import { useState } from "react";
const CommunityPostView = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllPostQuery({
    page,
    limit: 10,
  });
  return (
    <div>
      <OntheGoPagination
        className="mb-[10px]"
        totalDoc={data?.totalDoc || 0}
        onPageChange={(page) => setPage(page)}
      />
      <div className="gap-[10px]  grid-cols-3 grid">
        {data?.data?.map((post, i) => (
          <PostCard
            className="w-full"
            post={post}
            key={post._id}
            showFooterItems={false}
          >
            <div className="flex gap-[15px] w-full">
              <DeleteCommunityPost id={post._id} />
              <PostModal
                post={post}
                trigger={
                  <Button className="w-full" variant={"secondary"}>
                    View post
                  </Button>
                }
              />
            </div>
          </PostCard>
        ))}
      </div>
    </div>
  );
};

export default CommunityPostView;
