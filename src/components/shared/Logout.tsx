import { logout } from "@/redux/features/auth/auth.slice";
import { useAppDispatch } from "@/redux/hook";
import Cookies from "js-cookie";
import React from "react";
import { Button } from "../ui/button";
const Logout = ({ children }: { children?: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const hanldleLogout = () => {
    Cookies.remove("refreshToken");
    dispatch(logout(undefined));
  };
  return (
    <>
      {children ? (
        <span onClick={hanldleLogout}>{children}</span>
      ) : (
        <Button onClick={hanldleLogout} variant="destructive">Logout</Button>
      )}
    </>
  );
};

export default Logout;
