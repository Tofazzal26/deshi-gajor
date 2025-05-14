import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const IsraelCard = () => {
  return (
    <div className="howCardShadow p-4 lg:p-6">
      <div className="flex justify-center items-center flex-col">
        <Image
          src={"/ceralac.png"}
          width={200}
          height={200}
          alt="boycott"
          className="lg:w-[200px] lg:h-[100px] w-[200px] h-[80px]"
        />
        <h2 className="text-xl lg:text-2xl mt-2">Cerelac</h2>
        <button className="flex items-center gap-2 text-base lg:text-lg text-[#074c3e]">
          Read More <ChevronsRight size={18} />{" "}
        </button>
      </div>
    </div>
  );
};

export default IsraelCard;
