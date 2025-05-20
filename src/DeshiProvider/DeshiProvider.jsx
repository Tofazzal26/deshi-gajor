"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, useState } from "react";

export const AuthDeshiGajor = createContext();

import React from "react";

const DeshiProvider = ({ children }) => {
  const session = useSession();
  console.log(session);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const { data: reviewResponse = {}, isLoading: reviewLoading } = useQuery({
    queryKey: ["allReview", search, currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllReview?search=${search}&size=${itemPerPage}&page=${currentPage}`
      );
      return res?.data;
    },
  });
  const AllReview = reviewResponse?.data || [];
  const TotalReview = reviewResponse?.totalReview || 0;
  const numberOfPage = Math.ceil(TotalReview / itemPerPage);
  const pages = [];
  for (let index = 1; index <= numberOfPage; index++) {
    pages.push(index);
  }
  const allFunction = {
    loading,
    setLoading,
    AllReview,
    reviewLoading,
    setSearch,
    pages,
    currentPage,
    setCurrentPage,
    numberOfPage,
    TotalReview,
  };
  return (
    <AuthDeshiGajor.Provider value={allFunction}>
      {children}
    </AuthDeshiGajor.Provider>
  );
};

export default DeshiProvider;
