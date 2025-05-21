"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Box,
  DollarSign,
  MessageCircleMore,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import AmountChart from "./AmountChart";

const AdminDashboard = () => {
  const { isLoading, data: AllAdminData = {} } = useQuery({
    queryKey: ["AllAdminData"],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminTotalData`
      );
      return resp?.data?.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        ""
      ) : (
        <div className="bg-gray-100 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
            <div className="flex items-center bg-white cursor-pointer shadow-md rounded-lg py-8 px-8 hover:bg-blue-50 transition duration-200">
              <div className="text-blue-500">
                <MessageCircleMore className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {AllAdminData?.totalReview}
                </h3>
                <p className="text-gray-600">Total Reviews</p>
              </div>
            </div>
            <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-orange-50 transition duration-200">
              <div className="text-orange-500">
                <Box className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {" "}
                  {AllAdminData?.totalProduct}
                </h3>
                <p className="text-gray-600">Total Israel Products</p>
              </div>
            </div>
            <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-red-50 transition duration-200">
              <div className="text-red-500">
                <DollarSign className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {AllAdminData?.totalDonate}$
                </h3>
                <p className="text-gray-600">Total Donate</p>
              </div>
            </div>
            <div className="flex items-center bg-white shadow-md cursor-pointer rounded-lg py-8 px-8 hover:bg-green-50 transition duration-200">
              <div className="text-green-500">
                <Users className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {AllAdminData?.totalUser}
                </h3>
                <p className="text-gray-600">Total Users</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <AmountChart />
      </div>
    </div>
  );
};

export default AdminDashboard;
