"use client";
import CommonHeadline from "@/CommonHeadline/page";
import { Building, ChevronsRight, Search } from "lucide-react";
import Image from "next/image";
import ReviewCard from "./ReviewCard/page";
import { useContext } from "react";
import { AuthDeshiGajor } from "@/DeshiProvider/DeshiProvider";

const ReviewSection = () => {
  const { AllReview, reviewLoading } = useContext(AuthDeshiGajor);
  console.log(AllReview);
  const handleSearch = () => {};
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div>
          <CommonHeadline
            title={"Real Experiences That Build Trust"}
            paragraph={
              "A platform where real people share their genuine experiences, helping others make informed decisions before connecting with a company."
            }
          />
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4 lg:pb-8">
          <div>
            <h2 className="text-lg lg:text-2xl">Total Review: 0</h2>
          </div>
          <div>
            <div className="relative">
              <input
                onChange={handleSearch}
                className="bg-gray-100 outline-none text-sm lg:text-base lg:px-8 px-4 py-3 lg:py-4 rounded-none md:w-[440px] xl:w-[600px]"
                type="text"
                placeholder="Search by company..."
              />
              <div className="absolute right-3 lg:right-4 cursor-pointer top-3 lg:top-4">
                <Search className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
        {reviewLoading ? (
          <div className="flex justify-center items-center mt-4 lg:mt-8">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
          </div>
        ) : (
          ""
        )}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 my-8 lg:my-20">
          {AllReview?.map((item, idx) => (
            <ReviewCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
