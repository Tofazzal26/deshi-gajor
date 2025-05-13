import CommonHeadline from "@/CommonHeadline/page";
import Image from "next/image";
import React from "react";

const HowWorks = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div className="mb-4 lg:mb-8">
          <CommonHeadline
            title={"How it Works"}
            paragraph={"Understand the process in just a few simple steps."}
          />
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
            <div className="rounded-lg p-6 lg:p-8 howCardShadow text-center flex justify-center items-center flex-col">
              <Image
                src={"/search2.png"}
                width={200}
                height={200}
                alt="search"
                className="lg:w-[200px] lg:h-[200px] w-[150] h-[150px]"
              />
              <div>
                <h2 className="text-lg lg:text-xl my-2">
                  Search for a Company
                </h2>
                <p className="text-[#4b5563] text-sm lg:text-base mx-auto lg:w-[300px]">
                  Find the company you’re interested in by name or category.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6 lg:p-8 howCardShadow text-center flex justify-center items-center flex-col">
              <Image
                src={"/message2.png"}
                width={200}
                height={200}
                alt="search"
                className="lg:w-[200px] lg:h-[200px] w-[150] h-[150px]"
              />
              <div>
                <h2 className="text-lg lg:text-xl my-2">
                  Read Verified Reviews
                </h2>
                <p className="text-[#4b5563] text-sm lg:text-base mx-auto lg:w-[300px]">
                  See what real users have to say — honest feedback from real
                  experiences.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6 lg:p-8 howCardShadow text-center flex justify-center items-center flex-col">
              <Image
                src={"/editOne.png"}
                width={200}
                height={200}
                alt="search"
                className="lg:w-[200px] lg:h-[200px] w-[150] h-[150px]"
              />
              <div>
                <h2 className="text-lg lg:text-xl my-2">
                  Write Your Own Review
                </h2>
                <p className="text-[#4b5563] text-sm lg:text-base mx-auto lg:w-[300px]">
                  Share your experience to help others make better choices.
                </p>
              </div>
            </div>
            <div className="rounded-lg p-6 lg:p-8 howCardShadow text-center flex justify-center items-center flex-col">
              <Image
                src={"/ratingTwo.png"}
                width={200}
                height={200}
                alt="search"
                className="lg:w-[200px] lg:h-[200px] w-[150] h-[150px]"
              />
              <div>
                <h2 className="text-lg lg:text-xl my-2">Rate the Company</h2>
                <p className="text-[#4b5563] text-sm lg:text-base mx-auto lg:w-[300px]">
                  Give a rating based on your experience — good, bad, or mixed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
