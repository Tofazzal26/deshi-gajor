"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const IsraelDetails = () => {
  const params = useParams();
  const id = params.id;

  const { isLoading: productLoading, data: ProductDetails = [] } = useQuery({
    queryKey: ["ProductDetails", id],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleProduct/${id}`
      );
      return res?.data?.data;
    },
  });

  const { image, owner, reason, title } = ProductDetails || {};

  return (
    <div className="container mx-auto">
      <div className="mt-[100px] lg:mt-[150px]">
        <div className="my-20 lg:px-0 px-2">
          <div className="mx-auto lg:w-[250px]">
            <div className="flex justify-center mb-5 lg:mb-10 rounded-full items-center gap-2 bg-[#074c3e] text-white py-2">
              <h2 className="text-xl">BOYCOTT</h2>
              <Image src={"/israel.png"} width={40} height={40} alt="israel" />
              <h2 className="text-xl">ISRAEL</h2>
            </div>
          </div>
          {productLoading ? (
            <div className="flex justify-center items-center mt-4 lg:mt-8">
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
            </div>
          ) : (
            <div className="lg:w-[800px] mx-auto">
              <div className="howCardShadow px-4 lg:px-8 py-8 lg:py-16 text-center flex justify-center items-center flex-col">
                <Image src={image} width={200} height={200} alt="product" />
                <h2 className="text-xl lg:text-2xl mt-4">{title}</h2>
                <h2 className="text-lg lg:text-xl text-gray-700 my-2">
                  Owned by: <span className="text-black">{owner}</span>
                </h2>
                <p className="text-gray-500 text-base lg:text-lg lg:w-[600px] mx-auto">
                  {reason}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IsraelDetails;
