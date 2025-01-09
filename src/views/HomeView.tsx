"use client";
import ContentBar from "@/components/feed/ContentBar";
import FeedContent from "@/components/feed/FeedContent";
import LeftBar from "@/components/feed/Left";
import Protectedroute from "@/provider/p";
const HomeView = () => {
  return (
    <Protectedroute role="*">
      <div className="w-full h-[calc(100vh-81px)] flex justify-between gap-[15px] pt-[20px]">
        <LeftBar />
        <FeedContent />
        <ContentBar />
      </div>
    </Protectedroute>
  );
};

export default HomeView;
