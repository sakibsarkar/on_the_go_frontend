import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
const ContentBar = () => {
  return (
    <div className="w-64 bg-white p-4 hidden lg:block">
      <h2 className="font-semibold mb-4">Seemed Stories</h2>
      <Button variant="outline" className="w-full mb-4">
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Your Story
      </Button>
      <h2 className="font-semibold mb-4">Events</h2>
{/*     
        <div key={event.id} className="flex items-center mb-2">
          {event.icon}
          <span className="ml-2 text-sm">{event.title}</span>
        </div> */}
  
      <h2 className="font-semibold my-4">Friends</h2>
   
        {/* <div key={friend.id} className="flex items-center mb-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={friend.avatar} alt={friend.name} />
            <AvatarFallback>{friend.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{friend.name}</span>
        </div> */}
    
      <h2 className="font-semibold my-4">Groups</h2>
     
        {/* <div className="flex items-center mb-2">
          <Avatar className="w-8 h-8 mr-2">
            <AvatarImage src={group.avatar} alt={"group.name"} />
            <AvatarFallback>{group.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{group.name}</span>
        </div> */}
 
    </div>
  );
};

export default ContentBar;
