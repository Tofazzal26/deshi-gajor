"use client";

import CommonHeadline from "@/CommonHeadline/page";
import ReviewCard from "@/ReviewSection/ReviewCard/page";
import { Search, SquarePen } from "lucide-react";
import React from "react";

const Review = () => {
  const handleSearch = () => {};
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div>
          <CommonHeadline
            title={"Browse Genuine Reviews"}
            paragraph={
              "Real people share honest reviews to help you choose the right companies and organizations to trust and work with."
            }
          />
        </div>
        <div>
          <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4 lg:pb-8">
            <div>
              <button className="bg-[#074c3e] text-white flex lg:text-base text-sm items-center gap-2 lg:px-4 px-3 py-[10px] lg:py-3">
                Write Review <SquarePen size={18} />
              </button>
            </div>
            <div>
              <div className="relative">
                <input
                  onChange={handleSearch}
                  className="bg-gray-100 outline-none lg:px-8 px-4 py-3 lg:py-4 rounded-none md:w-[440px] xl:w-[600px] lg:text-base text-sm"
                  type="text"
                  placeholder="Search by company..."
                />
                <div className="absolute right-3 lg:right-4 cursor-pointer top-3 lg:top-4">
                  <Search className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 lg:my-20 grid-cols-1 grid lg:grid-cols-2 gap-4 lg:gap-8">
          <div>
            <ReviewCard />
          </div>
          <div>
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
