"use client";

import { useSession } from "next-auth/react";
import { createContext, useState } from "react";

export const AuthDeshiGajor = createContext();

import React from "react";

const DeshiProvider = ({ children }) => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  console.log(session);
  const allFunction = { loading, setLoading };
  return (
    <AuthDeshiGajor.Provider value={allFunction}>
      {children}
    </AuthDeshiGajor.Provider>
  );
};

export default DeshiProvider;
