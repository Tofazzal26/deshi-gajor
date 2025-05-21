"use client";
import React, { useEffect, useState } from "react";
import {
  DollarSign,
  LayoutDashboard,
  LogOut,
  User,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const session = useSession();
  const email = session?.data?.user?.email;
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: SingleUserRole = {} } = useQuery({
    queryKey: ["SingleUserRole", email],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserRole/${email}`
      );
      return resp?.data?.data;
    },
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div className="flex flex-col lg:flex-row mt-[85px] md:mt-[105px] lg:mt-[95px]">
      <div className="lg:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn bg-[#074c3e] px-2 py-2 text-white drawer-button"
            >
              <ChevronRight />
            </label>
          </div>
          <div className="drawer-side md:mt-[100px] mt-[80px]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#03211b] text-white min-h-full w-72 p-4">
              {/* Sidebar content here */}
              <li>
                <Link
                  href={"/dashboard/MyProfile"}
                  className={`${
                    pathname === "/dashboard/MyProfile"
                      ? "bg-[#074c3e]"
                      : "hover:bg-[#1c3020]"
                  } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
                >
                  <User /> My Profile
                </Link>
              </li>
              <li>
                {SingleUserRole?.userRole === "admin" ? (
                  <>
                    <Link
                      href={"/dashboard/AdminDashboard"}
                      className={`${
                        pathname === "/dashboard/AdminDashboard"
                          ? "bg-[#074c3e]"
                          : "hover:bg-[#1c3020]"
                      } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
                    >
                      <LayoutDashboard /> Dashboard
                    </Link>
                    <Link
                      href={"/dashboard/AdminAllPayment"}
                      className={`${
                        pathname === "/dashboard/AdminAllPayment"
                          ? "bg-[#074c3e]"
                          : "hover:bg-[#1c3020]"
                      } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
                    >
                      <DollarSign /> All Payments
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                <Link
                  href={"/"}
                  className="flex hover:bg-[#1c3020] cursor-pointer text-sm lg:text-lg items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md"
                >
                  <LogOut /> Exit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="bg-[#03211b] text-white lg:w-[265px] px-2 p-4 md:h-full lg:h-[90vh] border-b-[1px] border-[#1c3020]">
          <div className="lg:space-y-2 md:space-y-1 flex lg:flex-col md:flex-col lg:gap-0 md:gap-2 gap-4 flex-row">
            <Link
              href={"/dashboard/MyProfile"}
              className={`${
                pathname === "/dashboard/MyProfile"
                  ? "bg-[#074c3e]"
                  : "hover:bg-[#1c3020]"
              } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
            >
              <User /> My Profile
            </Link>
            {SingleUserRole?.userRole === "admin" ? (
              <>
                <Link
                  href={"/dashboard/AdminDashboard"}
                  className={`${
                    pathname === "/dashboard/AdminDashboard"
                      ? "bg-[#074c3e]"
                      : "hover:bg-[#1c3020]"
                  } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
                >
                  <LayoutDashboard /> Dashboard
                </Link>
                <Link
                  href={"/dashboard/AdminAllPayment"}
                  className={`${
                    pathname === "/dashboard/AdminAllPayment"
                      ? "bg-[#074c3e]"
                      : "hover:bg-[#1c3020]"
                  } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md`}
                >
                  <DollarSign /> All Payments
                </Link>
              </>
            ) : (
              ""
            )}

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
