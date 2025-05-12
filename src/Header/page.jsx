"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="bg-[#03211b] text-white py-2 border-b-[1px] border-[#1c3020]">
      <div className="container mx-auto">
        <div>
          <div className="navbar">
            <div className="navbar-start">
              <Link href="/">
                <button className="flex items-center gap-1 text-[22px] cursor-pointer lg:text-[32px]">
                  <Image
                    className="rotate-[40deg] lg:w-[65px] lg:h-[65px] w-[50px] h-[50px]"
                    src="/logoThree.png"
                    width={65}
                    height={65}
                    alt="logo"
                  />{" "}
                  <h2>
                    {" "}
                    Deshi <span className="text-[#ffb25a]"> Gajor</span>
                  </h2>
                </button>
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-4">
                  <li>
                    <h2 className="text-[17px]">
                      {" "}
                      <Link
                        href="/"
                        className={path === "/" ? "text-[#ffb25a]" : ""}
                      >
                        Home
                      </Link>{" "}
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">
                      <Link
                        href="/api/review"
                        className={
                          path === "/api/review" ? "text-[#ffb25a]" : ""
                        }
                      >
                        Review
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">
                      <Link
                        href="/api/israel"
                        className={
                          path === "/api/israel" ? "text-[#ffb25a]" : ""
                        }
                      >
                        Israel Product
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">
                      {" "}
                      <Link
                        href="/api/blog"
                        className={path === "/api/blog" ? "text-[#ffb25a]" : ""}
                      >
                        Blog
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">
                      {" "}
                      <Link
                        href="/api/about"
                        className={
                          path === "/api/about" ? "text-[#ffb25a]" : ""
                        }
                      >
                        About
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">
                      {" "}
                      <Link
                        href="/api/contact"
                        className={
                          path === "/api/contact" ? "text-[#ffb25a]" : ""
                        }
                      >
                        Contact
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <button className="bg-[#074c3e] text-[17px] px-5 py-2 rounded-full">
                      <Link
                        href="/api/login"
                        className={
                          path === "/api/login" ? "text-[#ffb25a]" : ""
                        }
                      >
                        Login
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-32 translate-x-[-80px] p-2 shadow"
                >
                  <li>
                    <h2 className="text-sm">Home</h2>
                  </li>
                  <li>
                    <h2 className="text-sm">Review</h2>
                  </li>
                  <li>
                    <h2 className="text-sm">Israel Product</h2>
                  </li>
                  <li>
                    <h2 className="text-sm">Blog</h2>
                  </li>
                  <li>
                    <h2 className="text-sm">About</h2>
                  </li>
                  <li>
                    <h2 className="text-sm">Contact</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
