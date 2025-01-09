"use client";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
const UserBox = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) return <></>;

  return (
    <Link
      href={"/profile"}
      className="flex items-center gap-[12px] p-[5px] hover:bg-primaryMat/5 w-full rounded-[8px]"
    >
      <div className="relative h-12 w-12 center bg-primaryMat/10 rounded-full p-[5px]">
        <Image
          width={40}
          height={40}
          src={user?.image || "/images/avatar.jpg"}
          alt={user?.firstName}
          className="rounded-full w-full h-full object-contain"
        />
      </div>
      <span className="font-[500]">
        {user?.firstName} {user.lastName}
      </span>
    </Link>
  );
};

export default UserBox;
