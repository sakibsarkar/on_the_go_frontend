"use client";
import DashboardHeader from "@/components/shared/DashboardHeader";
import Sidebar from "@/components/shared/DashboardSidebar";
import { ThemeProvider } from "@/provider/theme-provider";
import React, { SetStateAction, useState } from "react";
export interface ISideBarState {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full h-screen flex items-start justify-start pb-[30px]">
        <Sidebar isOpen={isOpen} setIsopen={setIsOpen} />
        <div className="w-full h-full flex-col flex">
          <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="h-full overflow-auto smoothBar">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
