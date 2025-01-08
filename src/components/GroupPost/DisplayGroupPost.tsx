import { useGetAllPostQuery } from "@/redux/features/post/post.api";
import { IPost } from "@/types/post";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostCardSkeleton from "../skeletons/PostCardSkeleton";
import { Separator } from "../ui/separator";

const DisplayGroupPost = () => {
  const { groupId } = useParams();
  const [query, setQuery] = useState({ group: groupId, page: 1, limit: 10 });
  const { data, isFetching } = useGetAllPostQuery(query);

  const [postData, setPostData] = useState<IPost[]>([]);

  useEffect(() => {
    if (data?.data) {
      setPostData(data.data || []);
    }
  }, [data]);

  return (
    <div className="mt-[15px]">
      <h3 className="text-[25px] text-primaryTxt font-[700]">Group Post</h3>
      <Separator className="my-4" />
      {postData?.map((post) => (
        <PostCard post={post} key={post._id} groupView={true} />
      ))}

      {isFetching && (
        <div className="flex items-center justify-center flex-col mt-[10px]">
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </div>
      )}
      {!isFetching && postData.length < (data?.totalDoc || 0) ? (
        <button
          onClick={() => setQuery({ ...query, page: query.page + 1 })}
          className="w-fit mt-[20px] mx-auto text-[15px] font-[700] text-primaryMat hover:underline center"
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayGroupPost;
