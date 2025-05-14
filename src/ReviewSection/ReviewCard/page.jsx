import { Building, ChevronsRight, Search } from "lucide-react";

const ReviewCard = () => {
  return (
    <div>
      <div className="howCardShadow p-4 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center lg:w-[50px] w-[45px] h-[45px] lg:h-[50px] bg-gray-100 rounded-full">
              <Building className="text-gray-600" />
            </div>
            <h2 className="text-base lg:text-lg">Store Republic</h2>
          </div>
          <div>
            <button className="bg-[#ffe0da] text-red-500 lg:px-5 px-3 py-[3px] lg:py-[5px] lg:text-lg text-base">
              Nagative
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl lg:text-2xl my-2 lg:my-3">
            Very Bad Experiance
          </h2>
          <p className="text-[15px] lg:text-[17px] text-gray-500">
            While the idea behind the app is great, my experience wasn’t very
            smooth. It took too long to load pages, and I encountered bugs while
            trying to submit a review. I hope future updates will fix these
            issues.
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 lg:mt-3">
          <h2 className="lg:text-base text-sm">May 12, 2025</h2>
          <button className="flex items-center gap-2 text-base lg:text-lg text-[#074c3e]">
            Read More <ChevronsRight size={18} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
