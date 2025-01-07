"use client";
import ContentBar from "@/components/feed/ContentBar";
import FeedContent from "@/components/feed/FeedContent";
import FilterBar from "@/components/feed/FilterBar";
import HeroSection from "@/components/feed/HeroSection";
import Protectedroute from "@/provider/p";
const HomeView = () => {
  return (
    <Protectedroute role="*">
      <div className="w-full h-[calc(100vh-107px)] flex">
        <HeroSection />
        <FilterBar />
        <FeedContent />
        <ContentBar />
      </div>
    </Protectedroute>
  );
};

export default HomeView;
