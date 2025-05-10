import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#03211b] text-white py-2">
      <div className="container mx-auto">
        <div>
          <div className="navbar">
            <div className="navbar-start">
              <button className="flex items-center gap-1 text-[22px] lg:text-[32px]">
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
            </div>
            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-4">
                  <li>
                    <h2 className="text-[17px]">Home</h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">Review</h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">Israel Product</h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">Blog</h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">About</h2>
                  </li>
                  <li>
                    <h2 className="text-[17px]">Contact</h2>
                  </li>
                  <li>
                    <button className="bg-[#074c3e] text-[17px] px-5 py-2 rounded-full">
                      Login
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
