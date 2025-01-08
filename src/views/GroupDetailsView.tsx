"use client";
import Loader from "@/components/shared/Loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetGroupDetailsByIdQuery } from "@/redux/features/group/group.api";
import { format } from "date-fns";
import { Calendar, Camera, Globe, Lock, Users, UsersRound } from "lucide-react";
import { useParams } from "next/navigation";

const GroupDetailsView = () => {
  const { groupId } = useParams();
  const { data, isLoading } = useGetGroupDetailsByIdQuery(groupId as string);

  if (isLoading) {
    return <Loader className="!h-screen" />;
  }

  const group = data?.data?.group;
  const member = data?.data?.member;

  return (
    <div className="container mx-auto py-6">
      <div className="overflow-hidden  text-card-foreground">
        <div className="relative">
          <img
            src={group?.image}
            alt={group?.name}
            className="h-[300px] w-full object-cover"
          />
          {data?.data?.member?.role === "owner" && (
            <Button
              variant="secondary"
              className="absolute bottom-4 right-4"
              onClick={() => document.getElementById("cover-upload")?.click()}
            >
              <Camera className="mr-2 h-4 w-4" />
              Change Cover
            </Button>
          )}
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="py-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{group?.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                {group?.privacy === "public" ? (
                  <Globe className="h-4 w-4" />
                ) : (
                  <Lock className="h-4 w-4" />
                )}
                <span className="capitalize">{group?.privacy} group</span>
                <span>·</span>
                <Users className="h-4 w-4" />
                <span>
                  {group?.memberCount} member
                  {group?.memberCount !== 1 ? "s" : ""}
                </span>
                <span>·</span>
                <Calendar className="h-4 w-4" />
                <span>
                  Created{" "}
                  {format(group?.createdAt || new Date(), "MMM dd, yyyy")}
                </span>
              </div>
            </div>

            {member?.role === "owner" && (
              <Button variant="outline">Manage Group</Button>
            )}

            {!member && (
              <Button
                variant="outline"
                className="bg-primaryMat/10 text-primaryMat border-primaryMat center gap-[8x]"
              >
                <UsersRound width={15} /> Join Group
              </Button>
            )}
          </div>

          <Tabs defaultValue="posts" className="mt-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="about">About</TabsTrigger>
              {group?.privacy === "public" ? (
                <>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </>
              ) : member ? (
                <>
                  <TabsTrigger value="posts">Posts</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger disabled={true} value="posts">
                    Posts
                  </TabsTrigger>
                  <TabsTrigger disabled={true} value="members">
                    Members
                  </TabsTrigger>
                  <TabsTrigger disabled={true} value="events">
                    Events
                  </TabsTrigger>
                </>
              )}
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">About this group</h2>
                  <p className="mt-2 text-muted-foreground">
                    {group?.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Admin</h2>
                  <div className="mt-2 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={group?.owner?.image}
                        alt={`${group?.owner?.firstName} ${group?.owner?.lastName}`}
                      />
                      <AvatarFallback>
                        {group?.owner?.firstName[0]}
                        {group?.owner?.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {member?.user.firstName} {member?.user.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Group Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="posts" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={member?.user.image}
                      alt={`${member?.user.firstName} ${member?.user.lastName}`}
                    />
                    <AvatarFallback>
                      {member?.user.firstName[0]}
                      {member?.user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
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
            </TabsContent>

            <TabsContent value="members" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={member?.user.image}
                      alt={`${member?.user.firstName} ${member?.user.lastName}`}
                    />
                    <AvatarFallback>
                      {member?.user.firstName[0]}
                      {member?.user.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {member?.user.firstName} {member?.user.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Group Admin · Joined{" "}
                      {format(member?.createdAt || new Date(), "MMM dd, yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="text-center text-muted-foreground">
                No events scheduled
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsView;
