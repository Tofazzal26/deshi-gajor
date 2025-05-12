import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="my-10 lg:my-20">
        <div className="grid gap-5 lg:gap-10 grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              src={"/about3.avif"}
              width={400}
              height={550}
              alt="about"
              className="w-full h-[400px] lg:h-[550px]"
            />
          </div>
          <div className="howCardShadow p-8">
            <div>
              <h2 className="text-2xl lg:text-4xl">About Us</h2>
              <p className="text-sm lg:text-lg text-gray-500 my-2 lg:my-6 leading-[30px] lg:leading-[40px]">
                At DeshiGajor, we believe that every opinion matters. In today’s
                digital world, people often fall for flashy marketing and paid
                promotions without knowing the real stories behind companies and
                services. That’s where we come in. DeshiGajor is a
                people-powered review platform dedicated to helping users across
                Bangladesh share their honest experiences. Whether it’s a small
                local business or a big corporate brand, your voice can shed
                light on their actual performance. From great customer service
                to unresolved complaints, every review helps others make
                smarter, safer choices. We are committed to building a trusted
                and transparent space where anyone—be it a student, a
                freelancer, a shopper, or a business owner—can find real
                insights from real users.
              </p>
              <h2 className="text-sm lg:text-lg">Tofazzal Hossain</h2>
            </div>
          </div>
        </div>
        <div className="howCardShadow p-8 mt-5 lg:mt-10">
          <p className="text-sm lg:text-lg text-gray-500 leading-[30px] lg:leading-[40px]">
            Our goal is to reduce misinformation, encourage accountability, and
            create a community where people support each other through shared
            knowledge. DeshiGajor isn’t just about stars and ratings. It’s about
            empowering users, promoting fairness, and shaping a more informed
            society. Together, we can make businesses better and decisions
            easier.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="howCardShadow">
              <div className="text-center lg:px-12 px-6 py-10 lg:py-20">
                <h2 className="text-xl lg:text-3xl lg:w-[400px] mx-auto">
                  Building a Transparent Community
                </h2>
                <p className="text-gray-500 text-base lg:text-lg lg:mt-8 mt-4 mb-5 lg:mb-10 mx-auto lg:w-[600px]">
                  Transparency is at the core of what we do. DeshiGajor is
                  committed to creating a space where honest feedback thrives.
                  We aim to connect people through shared experiences, ensuring
                  that decisions are based on truth, not trends. No fake reviews
                  — only honest conversations.
                </p>
                <button className="bg-transparent border-[2px] border-[#ffb25a] text-[#ffb25a]  px-6 lg:px-10 py-[10px] lg:py-[12px] cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
            <div>
              <Image
                src={"/about1.avif"}
                width={400}
                height={400}
                alt="about"
                className="w-full h-[350px] lg:h-[470px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <Image
                src={"/about2.jpg"}
                width={400}
                height={400}
                alt="about"
                className="w-full h-[350px] lg:h-[470px]"
              />
            </div>
            <div className="howCardShadow">
              <div className="text-center lg:px-12 px-6 py-10 lg:py-20">
                <h2 className="text-xl lg:text-3xl lg:w-[400px] mx-auto">
                  Empowering Users to Share Honest Experiences
                </h2>
                <p className="text-gray-500 text-base lg:text-lg lg:mt-8 mt-4 mb-5 lg:mb-10 mx-auto lg:w-[600px]">
                  At DeshiGajor, we believe every individual has the right to
                  share their authentic experience. Whether it's praise or
                  criticism, your review helps others make smarter choices and
                  encourages businesses to improve. Our platform is built to
                  amplify real voices in a sea of paid marketing.
                </p>
                <button className="bg-transparent border-[2px] border-[#ffb25a] text-[#ffb25a]  px-6 lg:px-10 py-[10px] lg:py-[12px] cursor-pointer">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
