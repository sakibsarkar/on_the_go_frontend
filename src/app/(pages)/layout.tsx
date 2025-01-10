import Header from "@/components/shared/Header";
import Protectedroute from "@/provider/p";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Protectedroute role="*">
      <Header />
      <main className="layout_container">{children}</main>
    </Protectedroute>
  );
};

export default layout;
