"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  ArrowLeft,
  Building,
  MessageCircle,
  Send,
  ThumbsDown,
  ThumbsUp,
  User,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ReviewDetails = () => {
  const params = useParams();
  const id = params.id;
  const [isComment, setIsComment] = useState("");
  const router = useRouter();

  const {
    refetch,
    isLoading,
    data: ReviewDetails = [],
  } = useQuery({
    queryKey: ["ReviewDetails"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ReviewDetails/${id}`
      );
      return res?.data?.data;
    },
  });

  const { company_name, date, review, status, title, _id, comment } =
    ReviewDetails || {};

  const handleCommentChange = (e) => {
    setIsComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddComment/${_id}`,
        {
          review: isComment,
        }
      );
      setIsComment("");
      if (response?.data?.status) {
        refetch();
        toast.success("Comment add success");
      }
    } catch (error) {
      console.error("Failed to submit comment:", error.response.data);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-5 lg:my-10 lg:px-0 px-2">
        {isLoading ? (
          <div className="flex justify-center items-center mt-4 lg:mt-8">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
          </div>
        ) : (
          <div>
            <div className="lg:w-[964px] mx-auto">
              <button
                onClick={() => router.push("/api/review")}
                className="flex text-[#074c3e] cursor-pointer items-center text-lg gap-1 mb-6"
              >
                <ArrowLeft size={18} /> Back to stories
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="howCardShadow lg:px-8 px-4 py-6 lg:py-12">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center lg:w-[50px] w-[45px] h-[45px] lg:h-[50px] bg-gray-100 rounded-full">
                      <Building className="text-gray-600" />
                    </div>
                    <h2 className="text-base lg:text-lg">{company_name}</h2>
                  </div>
                  <div>
                    <button
                      className={` ${
                        status === "Negative"
                          ? "bg-[#ffe0da] text-red-500"
                          : status === "Mixed"
                          ? "bg-[#fef9c3] text-[#854d0e]"
                          : "bg-[#e3fcf7] text-[#074c3e]"
                      } lg:px-5 px-3 py-[3px] lg:py-[5px] lg:text-lg text-base`}
                    >
                      {status}
                    </button>
                  </div>
                  <div>
                    <h2 className="lg:text-base text-sm">{date}</h2>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl my-2 lg:my-3">{title}</h2>
                  <p className="text-[15px] lg:text-[17px] text-gray-500 leading-[30px] lg:w-[900px]">
                    {review}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-8">
              <div className="lg:w-[964px] mx-auto">
                <div className="flex items-center gap-2 lg:mb-4 lg:mt-8 mt-4 mb-4">
                  <MessageCircle size={20} />
                  <h2 className="text-xl">Comments ({comment?.length})</h2>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <textarea
                        name="comment"
                        cols="30"
                        rows="4"
                        className="outline-none px-4 py-4 rounded-md border-[1px] border-[#d1d5db] w-full"
                        placeholder="Share your stories..."
                        onChange={handleCommentChange}
                        value={isComment}
                      ></textarea>

                      <div className="flex justify-end mt-2">
                        <button
                          type="submit"
                          className="bg-[#074c3e] flex items-center gap-2 cursor-pointer px-4 py-[10px] text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!isComment}
                        >
                          <Send size={18} /> Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:w-[964px] mx-auto">
                <div className="space-y-4">
                  {comment?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 border-b-[1px] border-gray-200 pb-4"
                    >
                      <div className="bg-[#e5e7eb] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                        <User size={18} />
                      </div>
                      <h2>{item?.review}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewDetails;
