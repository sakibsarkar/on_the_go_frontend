"use client";
import GroupJoin from "@/components/GroupDetails/GroupJoin";
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useGetGroupDetailsByIdQuery } from "@/redux/features/group/group.api";
import { setGroupData } from "@/redux/features/group/group.slice";
import { format } from "date-fns";
import { Calendar, Camera, Globe, Lock, Users } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const groupNavigation = [
  {
    path: "about",
    label: "About",
  },
  {
    path: "post",
    label: "Post",
  },
  {
    path: "members",
    label: "Members",
  },
];

const GroupDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const { groupId } = useParams();
  const { data, isLoading } = useGetGroupDetailsByIdQuery(groupId as string);
  const dispatch = useDispatch();

  const path = usePathname();

  useEffect(() => {
    if (data?.data?.group) {
      dispatch(setGroupData(data?.data?.group));
    }
  }, [data, dispatch]);

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

        <div className="py-6 bg-white px-6">
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

            {!member && <GroupJoin groupId={groupId as string} />}
          </div>

          <div className=" flex items-center justify-start mt-[25px] h-[40px] bg-primaryMat/10 px-3 rounded-[8px]">
            {group?.privacy === "public" ? (
              <>
                {groupNavigation.map((item, i) => {
                  const url = `/group/${groupId}/${item.path}`;
                  return (
                    <Link
                      key={i + item.path}
                      href={url}
                      className={`px-[25px] py-[8px] relative rounded-[0px] ${
                        path === url
                          ? "text-primaryMat after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primaryMat"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            ) : member ? (
              <>
                {groupNavigation.map((item, i) => {
                  const url = `/group/${groupId}/${item.path}`;
                  return (
                    <Link
                      key={i + item.path}
                      href={url}
                      className={`px-[25px] py-[8px] relative rounded-[0px] ${
                        path === url
                          ? "text-primaryMat after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primaryMat"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            ) : (
              <>
                {groupNavigation.map((item, i) => {
                  const url = `/group/${groupId}/${item.path}`;
                  return (
                    <Link
                      key={i + item.path}
                      href={url}
                      onClick={(e) => e.preventDefault()}
                      className={`px-[25px] py-[8px] relative rounded-[0px] cursor-not-allowed ${
                        path === url
                          ? "text-primaryMat after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primaryMat"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            )}
          </div>
          {/* <div className="space-y-4">
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
              </div> */}
        </div>
        <div className="mt-[25px]">{children}</div>
      </div>
    </div>
  );
};

export default GroupDetailsLayout;
