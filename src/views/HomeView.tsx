"use client";
import ContentBar from "@/components/feed/ContentBar";
import FeedContent from "@/components/feed/FeedContent";
import RightBar from "@/components/feed/RightBar";
import Protectedroute from "@/provider/p";
const HomeView = () => {
  return (
    <Protectedroute role="*">
      <div className="w-full h-[calc(100vh-107px)] flex justify-between">
        <RightBar />
        <FeedContent />
        <ContentBar />
      </div>
    </Protectedroute>
  );
};

export default HomeView;
