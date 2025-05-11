import React from "react";

const CommonHeadline = ({ title, paragraph }) => {
  return (
    <div className="text-center my-6 lg:my-12">
      <h2 className="text-xl lg:text-5xl">{title}</h2>
      <p className="text-sm lg:text-lg text-[#4b5563] mt-1 lg:mt-2">
        {paragraph}
      </p>
    </div>
  );
};

export default CommonHeadline;
