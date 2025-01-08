"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateGroupMutation } from "@/redux/features/group/group.api";
import { useAppSelector } from "@/redux/hook";
import { TGroupPrivacy } from "@/types/group";
import { upLoadSingeImage } from "@/utils/uploadSingleImage";
import { useFormik } from "formik";
import { Camera, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

const initialValues = {
  name: "",
  description: "",
  image: "/images/travelGroup.png",
  privacy: "public" as TGroupPrivacy,
};

export default function CreateGroupView() {
  const { token } = useAppSelector((state) => state.auth);

  const [createGroup, { isLoading }] = useCreateGroupMutation();
  const router = useRouter();

  const hanldeSubmit = async (values: typeof initialValues) => {
    if (isLoading) return;
    try {
      const res = await createGroup(values);
      const error = res.error as any;
      if (error) {
        return toast.error(error.data?.message || "Something went wrong");
      }
      toast.success("Group created successfully");

      router.push(`/groups/${res.data?.data?._id}`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: hanldeSubmit,
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    formik.setFieldValue("image", imageUrl);
    try {
      const { data } = (await upLoadSingeImage(file, token || "")) || {};
      formik.setFieldValue("image", data);
    } catch (error) {
      formik.setFieldValue("image", "/images/travelGroup.png");
      toast.error("Something went wrong while uploading image");
    }
  };

  return (
    <div className="container mx-auto py-6">
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center justify-start w-full gap-[15px]"
      >
        <Card className="w-[30%]">
          <CardHeader>
            <CardTitle>Create New Group</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Group Name</Label>
              <Input
                id="name"
                placeholder="Enter group name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="What's your group about?"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Cover Image</Label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Privacy</Label>
              <Select
                onValueChange={(value: TGroupPrivacy) =>
                  formik.setFieldValue("privacy", value)
                }
                value={formik.values.privacy}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Group Privacy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Group Privacy</SelectLabel>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-primaryMat/10 text-primaryMat border-[1px] border-primaryMat/20 hover:bg-primaryMat hover:text-white center gap-[5px]"
            >
              Create Group {isLoading ? <FaSpinner className="spinner" /> : ""}
            </Button>
          </CardContent>
        </Card>

        <Card className="w-[70%]">
          <CardHeader>
            <CardTitle>Group Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
              <div className="relative h-[200px]">
                <img
                  src={formik.values.image}
                  alt="Group cover"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {formik.values.name || "Your Group Name"}
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {formik.values.privacy} group · 1 member
                </div>
                <p className="text-sm text-muted-foreground">
                  {formik.values.description || "No description provided"}
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    <Input placeholder="What's on your mind?" />
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">
                      <Camera className="mr-2 h-4 w-4" />
                      Photo/video
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Users className="mr-2 h-4 w-4" />
                      Tag people
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
