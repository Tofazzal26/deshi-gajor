"use client";

import { useSession } from "next-auth/react";
import { createContext } from "react";

export const AuthDeshiGajor = createContext();

import React from "react";

const DeshiProvider = ({ children }) => {
  const session = useSession();
  console.log(session);
  const allReview = {};
  return (
    <AuthDeshiGajor.Provider value={allReview}>
      {children}
    </AuthDeshiGajor.Provider>
  );
};

export default DeshiProvider;
