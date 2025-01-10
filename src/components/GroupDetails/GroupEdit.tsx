"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateGroupByIdMutation } from "@/redux/features/group/group.api";
import { useAppSelector } from "@/redux/hook";
import { TGroupPrivacy } from "@/types/group";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AlertCircle, FileEdit, Globe, Lock, Users } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import * as Yup from "yup";

const GroupEdit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { group } = useAppSelector((state) => state.group);

  const { groupId } = useParams();
  const [updateGroup, { isLoading }] = useUpdateGroupByIdMutation();

  const initialValues = group || {
    name: "",
    description: "",
    privacy: "public" as TGroupPrivacy,
  };

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    description: Yup.string().trim().required("Description is required"),
    privacy: Yup.string().oneOf(
      ["public", "private"],
      "Invalid privacy option"
    ),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    if (isLoading) return;
    const payload = {
      name: values.name,
      description: values.description,
      privacy: values.privacy,
    };
    try {
      const res = await updateGroup({
        groupId: groupId as string,
        payload,
      });

      const error = res.error as any;
      if (error) {
        toast.error(error.data?.message || "Something went wrong");
        return;
      }
      setIsOpen(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Manage Group</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <FileEdit className="w-6 h-6" />
            Edit Group
          </DialogTitle>
          <DialogDescription>
            Update your group information below.
          </DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Name
                  </Label>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    placeholder="Enter group name"
                    className="w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm flex items-center mt-1"
                  >
                    {(msg) => (
                      <>
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {msg}
                      </>
                    )}
                  </ErrorMessage>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <FileEdit className="w-4 h-4" />
                    Description
                  </Label>
                  <Field
                    as={Textarea}
                    id="description"
                    name="description"
                    placeholder="Describe your group"
                    className="w-full min-h-[100px]"
                  />
                  <ErrorMessage
                    name="description"
                    component="p"
                    className="text-red-500 text-sm flex items-center mt-1"
                  >
                    {(msg) => (
                      <>
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {msg}
                      </>
                    )}
                  </ErrorMessage>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="privacy"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    {values.privacy === "public" ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <Lock className="w-4 h-4" />
                    )}
                    Privacy
                  </Label>
                  <Select
                    value={values.privacy}
                    onValueChange={(value) => setFieldValue("privacy", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select privacy setting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Public
                        </div>
                      </SelectItem>
                      <SelectItem value="private">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Private
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  disabled={isLoading}
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primaryMat center gap-[5px]"
                >
                  Update Group
                  {isLoading ? <FaSpinner className="spinner" /> : ""}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default GroupEdit;
