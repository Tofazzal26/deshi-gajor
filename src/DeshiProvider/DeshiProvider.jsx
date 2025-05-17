"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, useState } from "react";

export const AuthDeshiGajor = createContext();

import React from "react";

const DeshiProvider = ({ children }) => {
  const session = useSession();
  const [loading, setLoading] = useState(false);

  const { data: reviewResponse = {}, isLoading: reviewLoading } = useQuery({
    queryKey: ["allReview"],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllReview`
      );
      return res?.data;
    },
  });
  const AllReview = reviewResponse?.data || [];
  const TotalReview = reviewResponse?.totalReview || 0;
  console.log(session);
  console.log(TotalReview);
  const allFunction = { loading, setLoading, AllReview, reviewLoading };
  return (
    <AuthDeshiGajor.Provider value={allFunction}>
      {children}
    </AuthDeshiGajor.Provider>
  );
};

export default DeshiProvider;
