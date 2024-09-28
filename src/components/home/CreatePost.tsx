import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageIcon, PlusCircle, Smile } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const CreatePost = () => {
  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <form onSubmit={() => ""} className="flex items-center">
          <Avatar className="w-10 h-10 mr-4">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <Input
            placeholder="What's on your mind?"
            value={"newPost"}
            className="flex-1 mr-2"
          />
          <Button type="submit">Post</Button>
        </form>
      </CardContent>
      <Separator className="my-4" />
      <CardFooter className="justify-between">
        <Button variant="ghost" size="sm">
          <ImageIcon className="mr-2 h-4 w-4" />
          Photo/Video
        </Button>
        <Button variant="ghost" size="sm">
          <Smile className="mr-2 h-4 w-4" />
          Feeling/Activity
        </Button>
        <Button variant="ghost" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePost;
