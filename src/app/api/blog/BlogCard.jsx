import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const BlogCard = ({ item }) => {
  const { image, title, paragraph, readMore, date, month, year, author } =
    item || {};
  return (
    <div className="howCardShadow">
      <div className="relative">
        <Image
          src={image}
          alt="blogCard"
          className="w-full h-[350px] lg:h-[700px]"
          height={400}
          width={400}
        />
        <div className="bg-[#444444] text-white flex items-center justify-center flex-col lg:w-[100px] w-[70px] h-[80px] lg:h-[110px] p-5 absolute top-0 left-0">
          <h2 className="lg:text-sm text-[12px]">{month}</h2>
          <h2 className="text-xl lg:text-2xl">{date}</h2>
          <h2 className="lg:text-sm text-[12px]">{year}</h2>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-base lg:text-lg text-gray-700">{author}</h2>
        <h2 className="text-[20px]  md:text-[40px]">{title}</h2>
        <p className="text-gray-500 leading-7 lg:text-base text-sm">
          {paragraph}
        </p>
        <button className="flex text-white bg-[#074c3e] lg:px-4 px-3 cursor-pointer items-center gap-1 py-[8px] lg:text-base text-sm lg:py-[10px] rounded-md my-4">
          {readMore} <ChevronsRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
