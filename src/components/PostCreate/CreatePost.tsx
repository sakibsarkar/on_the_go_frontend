"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAppSelector } from "@/redux/hook";
import { upLoadSingeImage } from "@/utils/uploadSingleImage";
import { PlusCircle, Upload } from "lucide-react";
import Image from "next/image";
import { PrimeReactProvider } from "primereact/api";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import CategorySelector from "./CategorySelector";

export default function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [isPremium, setIsPremium] = useState(false);

  const [imageLoading, setImageLoading] = useState(false);

  const { token, user } = useAppSelector((state) => state.auth);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!token || !user) return;
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImageLoading(true);
      const { data } = await upLoadSingeImage(file, token);
      setImages((prev) => [...prev, data]);
      setImageLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ content, images, category, isPremium });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mb-4">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Your Story
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-auto smoothBar">
        <DialogHeader>
          <DialogTitle>Create a New Travel Post</DialogTitle>
          <DialogDescription>
            Share your travel tips, guides, and stories with the community.
          </DialogDescription>
        </DialogHeader>

        <PrimeReactProvider>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 overflow-auto flex flex-col w-full gap-[15px]"
          >
            <div className="flex flex-col gap-[10px]">
              <Label htmlFor="content">Your Travel Story</Label>
              <Editor
                value={content}
                style={{ height: "200px" }}
                onTextChange={(e) => setContent(e.htmlValue || "")}
              />
            </div>
            <CategorySelector onChange={() => ""} />
            <div className="flex flex-col gap-[10px]">
              <Label htmlFor="images">Attach Images</Label>
              <div className="flex items-center gap-[10px]">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="image"
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] object-cover rounded-md"
                  />
                ))}
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Label
                  htmlFor="images"
                  className="flex items-center flex-col justify-center w-[90px] h-[90px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer relative"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Images
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 w-full h-full center bg-[#0000003d]">
                      <ImSpinner2 className="animate-spin" />
                    </div>
                  )}
                </Label>
              </div>
            </div>
            <div className="flex items-center  gap-[10px]">
              <Switch
                id="premium"
                disabled={true}
                checked={isPremium}
                onCheckedChange={setIsPremium}
              />
              <Label htmlFor="premium">Mark as Premium Content</Label>
            </div>
            <Button type="submit" className="w-full">
              Create Post
            </Button>
          </form>
        </PrimeReactProvider>
      </DialogContent>
    </Dialog>
  );
}
