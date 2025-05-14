"use client";
import CommonHeadline from "@/CommonHeadline/page";
import React from "react";
import IsraelCard from "./IsraelCard";
import { PackagePlus, Plus, Search, SquarePen } from "lucide-react";

const Israel = () => {
  const handleSearch = () => {};
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div>
          <CommonHeadline
            title={"Boycott for Justice"}
            paragraph={
              "I no longer buy any products linked to Israel. No matter how useful they seem, supporting oppression is not an option. We should fully boycott them and take a stand against injustice."
            }
          />
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4 lg:pb-8">
              <div>
                <button className="bg-[#074c3e] text-white flex lg:text-base text-sm items-center gap-2 lg:px-4 px-3 py-[10px] lg:py-3">
                  Add Product <Plus size={18} />
                </button>
              </div>
              <div>
                <div className="relative">
                  <input
                    onChange={handleSearch}
                    className="bg-gray-100 outline-none lg:px-8 px-4 py-3 lg:py-4 rounded-none md:w-[440px] xl:w-[600px] lg:text-base text-sm"
                    type="text"
                    placeholder="Search by product..."
                  />
                  <div className="absolute right-3 lg:right-4 cursor-pointer top-3 lg:top-4">
                    <Search className="text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 lg:my-20 lg:gap-8 gap-4 grid grid-cols-2 lg:grid-cols-6">
          <IsraelCard />
          <IsraelCard />
          <IsraelCard />
          <IsraelCard />
          <IsraelCard />
          <IsraelCard />
        </div>
      </div>
    </div>
  );
};

export default Israel;
