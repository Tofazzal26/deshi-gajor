"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

const AdminAllPayment = () => {
  const { isLoading, data: AllPayment = [] } = useQuery({
    queryKey: ["AllPayment"],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllPayment`
      );
      return resp?.data?.data;
    },
  });

  return (
    <div>
      <div>
        <div className="bg-white md:px-8 md:py-2 overflow-auto">
          <h2 className="text-lg md:text-2xl my-4">All Payments</h2>
          <div className="relative overflow-auto">
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full bg-white border border-[#e5e5e5] mb-4">
                <thead>
                  <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        Id
                      </span>
                    </th>
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        Amount
                      </span>
                    </th>
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        Transaction Id
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AllPayment?.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#e5e5e5] text-xs md:text-sm text-center text-gray-800"
                    >
                      <td className="p-2 md:p-4">{idx + 1}</td>
                      <td className="p-2 md:p-4">{item?.donate}$</td>
                      <td className="p-2 md:p-4">{item?.transaction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {isLoading ? (
                <div className="flex justify-center items-center mt-4 lg:mt-8">
                  <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
                </div>
              ) : (
                ""
              )}

              {AllPayment?.length === 0 && (
                <div className="flex items-center flex-col">
                  <Image
                    layout="intrinsic"
                    width={300}
                    height={300}
                    src="/noFound.webp"
                    alt=""
                    className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px]"
                  />
                  <h2>No Payments</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllPayment;
