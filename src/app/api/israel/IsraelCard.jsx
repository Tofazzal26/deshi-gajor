"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const IsraelCard = ({ item }) => {
  const { image, owner, reason, title, _id } = item || {};
  const router = useRouter();
  return (
    <div className="howCardShadow p-4 lg:p-6">
      <div className="flex justify-center items-center flex-col">
        <Image
          src={image}
          width={200}
          height={200}
          alt="boycott"
          className="lg:w-[200px] lg:h-[100px] w-[200px] h-[80px]"
        />
        <h2 className="text-xl lg:text-2xl mt-2">{title}</h2>
        <button
          onClick={() => router.push(`/api/israel/${_id}`)}
          className="flex items-center cursor-pointer gap-2 text-base lg:text-lg text-[#074c3e]"
        >
          Read More <ChevronsRight size={18} />{" "}
        </button>
      </div>
    </div>
  );
};

export default IsraelCard;
