"use client";
import { ArrowLeft, Building, ChevronsRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const ReviewCard = ({ item }) => {
  const { company_name, title, review, date, status, _id } = item || {};
  const router = useRouter();

  return (
    <div>
      <div className="howCardShadow p-4 lg:p-8 h-full fade-in-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center lg:w-[50px] w-[45px] h-[45px] lg:h-[50px] bg-gray-100 rounded-full">
              <Building className="text-gray-600" />
            </div>
            <h2 className="text-base lg:text-lg">{company_name}</h2>
          </div>
          <div>
            <button
              className={` ${
                status === "Nagative"
                  ? "bg-[#ffe0da] text-red-500"
                  : status === "Mixed"
                  ? "bg-[#fef9c3] text-[#854d2b]"
                  : "bg-[#e3fcf7] text-[#074c3e]"
              } lg:px-5 px-3 py-[3px] lg:py-[5px] lg:text-lg text-base`}
            >
              {status}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl lg:text-2xl my-2 lg:my-3">{title}</h2>
          <p className="text-[14px] lg:text-[16px] text-gray-500">
            {`${review?.slice(0, 140)}....`}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 lg:mt-3">
          <h2 className="lg:text-base text-sm">{date}</h2>
          <button
            onClick={() => router.push(`/api/review/${_id}`)}
            className="flex items-center gap-2 cursor-pointer text-base lg:text-lg text-[#074c3e]"
          >
            Read More <ChevronsRight size={18} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
