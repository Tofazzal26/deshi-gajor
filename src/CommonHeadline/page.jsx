import React from "react";

const CommonHeadline = ({ title, paragraph }) => {
  return (
    <div className="text-center my-5 lg:my-12">
      <h2 className="text-xl lg:text-5xl">{title}</h2>
      <p className="text-sm lg:text-lg text-[#4b5563] mt-1 lg:mt-2 mx-auto lg:w-[600px]">
        {paragraph}
      </p>
    </div>
  );
};

export default CommonHeadline;
