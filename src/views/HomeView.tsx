import ContentBar from "@/components/home/ContentBar";
import FeedContent from "@/components/home/FeedContent";
import FilterBar from "@/components/home/FilterBar";
import HeroSection from "@/components/home/HeroSection";

const HomeView = () => {
  return (
    <div className="w-full h-[calc(100vh-107px)] flex">
      <HeroSection />
      <FilterBar />
      <FeedContent />
      <ContentBar />
    </div>
  );
};

export default HomeView;
