"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AmountChart = () => {
  const {
    data: AllAdminData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["AllAdminData"],
    queryFn: async () => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminTotalData`
      );
      return resp?.data?.data;
    },
  });

  const discountedPrice = AllAdminData?.totalDonate
    ? AllAdminData.totalDonate * 0.9
    : 0;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()];

  const data = {
    labels: [currentMonth],
    datasets: [
      {
        label: "Donate",
        data: [discountedPrice],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Donation for ${currentMonth}`,
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center mt-4 lg:mt-8">
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
      </div>
    );
  if (isError)
    return <div className="p-6 text-red-500">Failed to load chart data</div>;

  return (
    <div className="p-6 bg-white rounded-lg howCardShadow">
      <h2 className="text-lg font-semibold mb-4">Donation Chart</h2>
      <div className="w-full h-64 sm:h-72 md:w-[600px] md:h-80 lg:w-full lg:h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AmountChart;
