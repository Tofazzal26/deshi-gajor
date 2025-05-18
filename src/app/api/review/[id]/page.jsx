"use client";

import {
  Building,
  MessageCircle,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useParams } from "next/navigation";

const ReviewDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  let status = "Negative";

  return (
    <div className="container mx-auto">
      <div className="my-5 lg:my-10 lg:px-0 px-2">
        <div className="flex justify-center items-center">
          <div className="howCardShadow lg:px-8 px-4 py-6 lg:py-12">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center lg:w-[50px] w-[45px] h-[45px] lg:h-[50px] bg-gray-100 rounded-full">
                  <Building className="text-gray-600" />
                </div>
                <h2 className="text-base lg:text-lg">Store Republic</h2>
              </div>
              <div>
                <button
                  className={` ${
                    status === "Negative"
                      ? "bg-[#ffe0da] text-red-500"
                      : "bg-[#e3fcf7] text-[#074c3e]"
                  } lg:px-5 px-3 py-[3px] lg:py-[5px] lg:text-lg text-base`}
                >
                  {status}
                </button>
              </div>
              <div>
                <h2 className="lg:text-base text-sm">May 12, 2025</h2>
              </div>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl my-2 lg:my-3">
                {" "}
                Avoid RoboFication If You Value Growth, Mentorship, and Respect
              </h2>
              <div className="flex items-center gap-3 lg:gap-6 mb-2 lg:mb-4">
                <button className="bg-gray-100 cursor-pointer pt-[2px] pb-[4px] px-4 flex items-center gap-1 rounded-4xl">
                  <ThumbsUp className="text-gray-600" size={16} />{" "}
                  <span className="text-gray-600 text-[17px] mt-[4px]">0</span>
                </button>
                <button className="bg-gray-100 cursor-pointer px-4 pt-[3px] pb-[2px] flex items-center gap-1 rounded-4xl">
                  <ThumbsDown className="text-gray-600" size={16} />{" "}
                  <span className="text-gray-600 text-[17px] mb-[4px]">0</span>
                </button>
              </div>
              <p className="text-[15px] lg:text-[17px] text-gray-500 leading-[30px] lg:w-[900px]">
                RoboFication suffers from a severe lack of professional
                leadership. Decisions are made emotionally, often without prior
                communication or warning. Employees have been terminated
                abruptly, reflecting a disregard for basic workplace ethics and
                transparency. Interns from top universities are hired at low pay
                with no senior mentors to guide them, while being pushed to
                deliver unrealistic projects within impossible deadlines.
                Instead of fostering growth, the company imposes pressure and
                discourages open communication or feedback. The overall culture
                is driven by ego and micromanagement. Constructive criticism is
                treated as conflict, and dissent is punished. For anyone serious
                about learning, growing, and building a meaningful career in
                tech, this environment is more harmful than helpful.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:w-[964px] mx-auto">
            <div className="flex items-center gap-2 lg:mb-4 lg:mt-8 mt-4 mb-4">
              <MessageCircle size={20} />
              <h2 className="text-xl">Comments (0)</h2>
            </div>
            <div>
              <form>
                <textarea
                  name="comment"
                  id=""
                  cols="30"
                  rows="4"
                  className="outline-none px-4 py-4 rounded-md border-[1px] border-[#d1d5db] w-full "
                  placeholder="Share your stories..."
                ></textarea>
                <div className="text-right mt-2">
                  <button className="bg-[#074c3e] flex items-center gap-2 cursor-pointer px-4 py-2 text-white rounded-md">
                    <Send size={18} /> Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
