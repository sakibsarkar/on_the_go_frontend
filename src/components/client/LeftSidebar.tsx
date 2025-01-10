"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GroupSuggestion from "../feed/GroupSuggestion";
import MyGroups from "../feed/MyGroups";
import ShortCuts from "../feed/ShortCuts";
import { Separator } from "../ui/separator";
export function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white overflow-auto">
          <SheetHeader>
            <Link href={"/"} className="text-lg font-bold">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="logo"
                className="w-[40px]"
              />
            </Link>
          </SheetHeader>

          <div className="w-full" onClick={() => setIsOpen(false)}>
            <Separator className="my-5" />
            <ShortCuts />
            <MyGroups />
            <Separator className="my-5" />
            <GroupSuggestion />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
