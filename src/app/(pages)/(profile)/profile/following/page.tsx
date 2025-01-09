import FolowingList from "@/components/feed/FolowingList";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  return (
    <div className="w-full  mx-auto bg-white rounded-lg overflow-hidden">
      <div className="p-4 border-b mb-[20px]">
        <h2 className="text-lg font-semibold">Following</h2>
      </div>

      <ScrollArea className="h-[300px] px-4">
        <FolowingList heading={false} />
      </ScrollArea>
    </div>
  );
};

export default page;
