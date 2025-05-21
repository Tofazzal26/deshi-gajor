"use client";
import CommonHeadline from "@/CommonHeadline/page";
import React, { useState } from "react";
import IsraelCard from "./IsraelCard";
import { PackagePlus, Plus, Search, SquarePen } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Israel = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const product = e.target.value;
    setSearch(product);
  };

  const { isLoading: productLoading, data: AllProduct = [] } = useQuery({
    queryKey: ["AllProduct", search],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/IsraelAllProduct?search=${search}`
      );
      return resp?.data?.data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="lg:px-0 px-2">
        <div className="mt-[100px] lg:mt-[150px]">
          <CommonHeadline
            title={"Boycott for Justice"}
            paragraph={
              "I no longer buy any products linked to Israel. No matter how useful they seem, supporting oppression is not an option. We should fully boycott them and take a stand against injustice."
            }
          />
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center border-b-[1px] border-gray-200 pb-4 lg:pb-8">
              <div>
                <h2 className="text-lg lg:text-2xl">
                  Total Product: {AllProduct ? AllProduct.length : "0"}
                </h2>
              </div>
              <div>
                <div className="relative">
                  <input
                    onChange={handleSearch}
                    className="bg-gray-100 outline-none lg:px-8 px-4 py-3 lg:py-4 rounded-none md:w-[440px] xl:w-[600px] lg:text-base text-sm"
                    type="text"
                    placeholder="Search by product..."
                  />
                  <div className="absolute right-3 lg:right-4 cursor-pointer top-3 lg:top-4">
                    <Search className="text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {productLoading ? (
            <div className="flex justify-center items-center mt-4 lg:mt-8">
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
            </div>
          ) : (
            <div>
              {AllProduct?.length === 0 ? (
                <div className="text-center">
                  <h2 className="text-xl mt-10">
                    Couldn't find the product. Check{" "}
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      className="text-blue-400 border-b-[1px] border-blue-400"
                    >
                      Google{" "}
                    </a>
                    ?
                  </h2>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="mb-10 lg:my-20 lg:gap-8 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {AllProduct?.map((item, idx) => (
            <IsraelCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Israel;
