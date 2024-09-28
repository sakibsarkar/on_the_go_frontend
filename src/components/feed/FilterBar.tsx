import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  Image as ImageIcon,
  ShoppingBag,
  Video,
} from "lucide-react";
const FilterBar = () => {
  return (
    <div className="w-64 bg-white p-4 hidden md:block">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-blue-500 rounded-lg mr-2"></div>
        <h1 className="text-xl font-bold">Square</h1>
      </div>
      <nav>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <FileText className="mr-2 h-4 w-4" />
          Feed
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Avatar className="w-4 h-4 mr-2">
            <AvatarImage src="/placeholder.svg?height=16&width=16" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          Friends
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          Event
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Video className="mr-2 h-4 w-4" />
          Watch Videos
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <ImageIcon className="mr-2 h-4 w-4" />
          Photos
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <FileText className="mr-2 h-4 w-4" />
          Files
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Marketplace
        </Button>
      </nav>
    </div>
  );
};

export default FilterBar;
