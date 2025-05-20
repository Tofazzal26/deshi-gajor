"use client";
import React, { useEffect, useState } from "react";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div className="flex lg:flex-row md:flex-row flex-col">
      <div>
        <div className="bg-[#03211b] text-white lg:w-[265px] px-2 p-4 md:h-full lg:h-[90vh] border-b-[1px] border-[#1c3020]">
          <div className="lg:space-y-2 md:space-y-1 flex lg:flex-col md:flex-col lg:gap-0 md:gap-2 gap-4 flex-row">
            <Link
              href={"/api/dashboard/MyProfile"}
              className={`${
                pathname === "/api/dashboard/MyProfile"
                  ? "bg-[#074c3e]"
                  : "hover:bg-[#1c3020]"
              } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
            >
              <User /> My Profile
            </Link>
            <Link
              href={"/api/dashboard/AdminDashboard"}
              className={`${
                pathname === "/api/dashboard/AdminDashboard"
                  ? "bg-[#074c3e]"
                  : "hover:bg-[#1c3020]"
              } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
            >
              <LayoutDashboard /> Dashboard
            </Link>
            <Link href={"/"}>
              <button className="flex hover:bg-[#1c3020] cursor-pointer text-sm lg:text-lg items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md">
                <LogOut /> Exit
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex-1 md:flex-1">{children}</div>
    </div>
  );
};

export default Layout;
