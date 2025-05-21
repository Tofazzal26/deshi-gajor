"use client";
import { Search, SquarePen } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="bg-[#03211b] text-white">
      <div className="container mx-auto lg:px-0 px-2">
        <div className="pt-[50px]">
          <div className="flex lg:gap-0 gap-6 lg:flex-row md:flex-row flex-col items-center justify-between">
            <div>
              <h2 className="text-base lg:text-xl text-[#ffb25a] flex items-center gap-4">
                <Image src="/title.png" width={30} height={30} alt="title" />
                Share Your Experience, Help Others Decide
              </h2>
              <h2 className="text-xl lg:text-[64px] lg:w-[550px] lg:leading-[75px] my-3 lg:my-4">
                Know the Company Before You Trust It
              </h2>
              <p className="text-base lg:text-lg lg:w-[600px] md:w-[400px]">
                We know that choosing the right company or service can be
                confusing. That’s why we created a platform where real people
                share real experiences — helping you make smarter decisions.
              </p>
              <div className="flex items-center gap-3 lg:gap-6 mt-3 lg:mt-7">
                <button
                  onClick={() => router.push(`/api/review`)}
                  className="flex items-center gap-2 rounded-full px-6 lg:px-8 py-[12px] lg:py-[14px] cursor-pointer  bg-[#074c3e] "
                >
                  Search Company <Search size={18} />{" "}
                </button>
                <button
                  onClick={() => router.push(`/api/WriteReview`)}
                  className="flex items-center gap-2 bg-transparent border-[1px] border-[#ffb25a] text-[#ffb25a] rounded-full px-6 lg:px-8 py-[12px] lg:py-[14px] cursor-pointer"
                >
                  Write Review <SquarePen size={18} />{" "}
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/hero.png"
                width={600}
                height={600}
                alt="review"
                className="lg:w-[600px] lg:h-[720px] md:h-[400px] w-[300px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
