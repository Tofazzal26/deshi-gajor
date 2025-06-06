"use client";

import CommonHeadline from "@/CommonHeadline/page";
import { AuthDeshiGajor } from "@/DeshiProvider/DeshiProvider";
import ReviewCard from "@/ReviewSection/ReviewCard/page";
import { ArrowLeft, Search, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Review = () => {
  const {
    AllReview,
    reviewLoading,
    setSearch,
    pages,
    currentPage,
    setCurrentPage,
    numberOfPage,
  } = useContext(AuthDeshiGajor);

  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearch(text);
  };

  const handleCurrentPage = (crnPage) => {
    setCurrentPage(crnPage);
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div className="mt-[100px] lg:mt-[150px]">
          <CommonHeadline
            title={"Real Experiences. True Stories."}
            paragraph={
              "Real people share honest reviews to help you choose the right companies and organizations to trust and work with."
            }
          />
        </div>

        <div>
          <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4 lg:pb-8">
            <div>
              <button
                onClick={() => router.push(`/api/WriteReview`)}
                className="bg-[#074c3e] text-white cursor-pointer flex lg:text-base text-sm items-center gap-2 lg:px-4 px-3 py-[10px] lg:py-3"
              >
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
        {reviewLoading ? (
          <div className="flex justify-center items-center mt-4 lg:mt-8">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
          </div>
        ) : (
          <div>
            {AllReview?.length === 0 ? (
              <div className="text-center mt-5 lg:mt-10">
                <h2 className="text-xl">No stories found</h2>
                <p className="text-gray-500 mt-2">
                  No results found. Try changing your filters or start by adding
                  a new story!
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        )}

        <div className="my-10 lg:my-20">
          <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
            {AllReview?.map((item, idx) => (
              <ReviewCard key={idx} item={item} />
            ))}
          </div>
          <div
            className={` ${
              reviewLoading ? "hidden" : ""
            } space-x-2 mt-8 text-center`}
          >
            <button
              onClick={handlePrevPage}
              className="bg-[#074c3e] px-4 py-2 cursor-pointer text-white rounded-md"
            >
              Prev
            </button>
            {pages.map((item, index) => (
              <button
                key={index + 1}
                onClick={() => handleCurrentPage(index + 1)}
                className={`border-[1px] cursor-pointer text-base border-[#074c3e] px-4 py-2 text-[#074c3e] rounded-md ${
                  currentPage === index + 1 ? "bg-[#074c3e] text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="bg-[#074c3e] cursor-pointer px-4 py-2 text-white rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
