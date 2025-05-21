import {
  Facebook,
  MailOpen,
  MapPin,
  MessageCircleHeart,
  MessageCircleMore,
  Navigation,
  PhoneMissed,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#03211b]">
      <div className="container mx-auto">
        <div className="py-[80px] lg:py-[100px] lg:px-0 px-2">
          <div className="flex lg:flex-row lg:gap-0 gap-4 md:flex-col flex-col justify-between">
            <div>
              <div className="flex items-center text-white gap-1 text-[22px] lg:text-[32px]">
                <Image
                  className="rotate-[40deg] lg:w-[65px] lg:h-[65px] w-[50px] h-[50px]"
                  src="/logoThree.png"
                  width={65}
                  height={65}
                  alt="logo"
                />{" "}
                <h2>
                  {" "}
                  Deshi <span className="text-[#ffb25a]"> Gajor</span>
                </h2>
              </div>
              <h2 className="text-[#ebecef] w-[300px] text-[15px] mt-4 mb-6">
                DeshiReview helps professionals share honest feedback on
                companies, empowering others to make better decisions.
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                  <Facebook color="#ffffff" size={22} />
                </div>
                <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                  <Twitter color="#ffffff" size={20} />
                </div>
                <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                  <MessageCircleHeart color="#ffffff" size={20} />
                </div>
                <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                  <MessageCircleMore color="#ffffff" size={20} />
                </div>
              </div>
            </div>
            <div className="text-[#ebecef]">
              <h2 className="text-2xl mb-4">Contact</h2>
              <ul className="text-[15px]  space-y-4">
                <li className="flex items-center gap-3">
                  {" "}
                  <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                    <PhoneMissed color="#ffffff" size={22} />
                  </div>{" "}
                  +8801306700357
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                    <MailOpen color="#ffffff" size={22} />
                  </div>{" "}
                  afranislamabir6789@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <div className="w-[40px] h-[40px] bg-[#0b4f41] rounded-full flex justify-center items-center ">
                    <MapPin color="#ffffff" size={22} />
                  </div>{" "}
                  BD, Dhaka-Gazipur
                </li>
              </ul>
            </div>
            <div className="text-[#ebecef]">
              <h2 className="text-2xl mb-4">Legal</h2>
              <ul className="text-[15px] space-y-4">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div className="text-[#ebecef]">
              <h2 className="text-2xl mb-4">Quick Links</h2>
              <ul className="text-[15px] space-y-4">
                <li>Home</li>
                <li>About Us</li>
                <li>Latest Reviews</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="text-[#ebecef]">
              <h2 className="text-[15px] w-[300px]">
                Subscribe our newsletter to get our latest update & news
              </h2>
              <div className="relative mt-8">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-[1px] border-[#0b4f41] rounded-2xl px-10 py-5 outline-none "
                />
                <div className="w-[70px] h-[50px] bg-[#0b4f41] absolute lg:right-[50px] lg:top-[7px] rounded-2xl flex justify-center items-center md:left-[180px] top-[7px] right-[200px]">
                  <Navigation color="#ffffff" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#213b36] text-[15px] py-8 text-center">
          <h2 className="text-[#ebecef]">
            Copyright © 2025 DeshiGajor. All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
