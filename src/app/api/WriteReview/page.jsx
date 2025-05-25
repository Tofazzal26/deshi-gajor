"use client";

import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const WriteReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [addReviewLoading, setAddReviewLoading] = useState(false);

  const onSubmit = async (data) => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const allData = {
      company_name: data?.company,
      title: data?.title,
      review: data?.story,
      date: formattedDate,
      status: data?.status,
      comment: [],
    };
    try {
      setAddReviewLoading(true);
      const resp = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddReview`,
        allData
      );
      setAddReviewLoading(false);
      if (resp?.status === 200) {
        toast.success("Your story has been uploaded");
        router.push("/api/review");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-[100px] lg:mt-[150px]">
        <div className="my-10">
          <div className="lg:w-[964px] mx-auto howCardShadow p-8">
            <div className="text-center">
              <h1 className=" text-lg md:text-3xl">Share Your True Story</h1>
              <p className="text-gray-500 text-lg mt-2">
                Tell others about your experience with a company or
                organization.
              </p>
              <p className="text-gray-500 text-lg">
                • Be honest and specific about your experience
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-gray-500">Title *</label>
                <br />
                <input
                  type="text"
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-500">
                    This Title field is required
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-500">
                  Company/Organization Name *
                </label>
                <br />
                <input
                  type="text"
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                  {...register("company", { required: true })}
                />
                {errors.company && (
                  <span className="text-red-500">
                    This Company field is required
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-500">Review Type *</label>
                <br />
                <select
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                  {...register("status", { required: true })}
                >
                  <option value="">Select review type</option>
                  <option value="Positive">Positive</option>
                  <option value="Nagative">Nagative</option>
                  <option value="Mixed">Mixed</option>
                </select>
                {errors.status && (
                  <span className="text-red-500">
                    This Review type field is required
                  </span>
                )}
              </div>
              <div>
                <div className="mt-4">
                  <textarea
                    cols="30"
                    rows="10"
                    className="outline-none px-4 py-4 rounded-md border-[1px] border-[#d1d5db] w-full"
                    placeholder="Write Your Story..."
                    {...register("story", { required: true })}
                  ></textarea>
                  {errors.story && (
                    <span className="text-red-500">
                      This Story field is required
                    </span>
                  )}

                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="bg-[#074c3e] cursor-pointer px-4 py-[10px] text-white rounded-md"
                    >
                      {addReviewLoading ? (
                        <span className="text-white flex items-center px-4 justify-center text-lg">
                          <Loader className="animate-spin" size={25} />
                        </span>
                      ) : (
                        "Submit Story"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
