import Image from "next/image";
import React from "react";
import ContactShadow from "./ContactStyle/Contact.module.css";
import CommonHeadline from "@/CommonHeadline/page";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      image: "/contact1.webp",
      title: "Email Address",
      infoOne: "afranislamabir6789@gmail.com",
      infoTwo: "mdtofazzalislam6789@gmail.com",
    },
    {
      id: 2,
      image: "/contact2.webp",
      title: "Phone Number",
      infoOne: "+8801306700357",
      infoTwo: "+8801931342951",
    },
    {
      id: 3,
      image: "/contact3.webp",
      title: "Office Address",
      infoOne: "Dhaka, Tongi-Gazipur",
      infoTwo: "Dhaka, BANGLADESH",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="my-20 lg:px-0 px-2">
        <div>
          <CommonHeadline
            title={"Get in Touch With Us"}
            paragraph={
              "Have a question or feedback? We're here to help. Reach out anytime, and we'll get back to you as soon as possible."
            }
          />
        </div>
        <div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-8">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#e5e5e5] w-[300px] md:w-[400px]"
              >
                <div className="flex justify-center flex-col py-6 md:py-10 items-center">
                  <Image
                    src={item.image}
                    alt="contactCard"
                    width={85}
                    height={85}
                  />
                  <h2 className="text-[18px] md:text-[28px] mt-6 mb-2">
                    {item.title}
                  </h2>
                  <h2 className="text-sm md:text-lg mb-1">{item.infoOne}</h2>
                  <h2 className="text-sm md:text-lg">{item.infoTwo}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mt-[20px] md:mt-[60px]">
            <div className={ContactShadow.cardShadow}>
              <div className="md:w-[800px] mx-auto p-4 md:p-0">
                <div>
                  <div className="text-center border-b-[1px] border-[#e5e5e5] py-[20px] md:py-[60px]">
                    <h2 className=" text-[25px] md:text-[40px]">Send Us</h2>
                    <p className="text-[16px] md:text-[18px] mx-auto text-gray-600 md:w-[600px]">
                      DeshiGajor is an online platform that makes it easy to
                      read, write, and explore company reviews. Users can
                      search, filter, and share experiences to help others make
                      informed decisions.
                    </p>
                  </div>
                  <div className="mt-[20px] md:mt-[60px] pb-[30px] md:pb-[100px]">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                      <div className="col-span-1">
                        {" "}
                        <div>
                          <label>Your name *</label>
                          <input
                            type="text"
                            className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 rounded-sm"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-span-1">
                        {" "}
                        <div>
                          <label>Your email *</label>
                          <input
                            type="text"
                            className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 mb-4 rounded-sm"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label>Subject *</label>
                      <input
                        type="text"
                        className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 mb-4 rounded-sm"
                        required
                      />
                    </div>
                    <div>
                      <label>Your message *</label>
                      <textarea
                        className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 rounded-sm"
                        cols="30"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <button className="bg-[#074c3e] py-[10px] cursor-pointer text-white px-8 rounded-sm mt-4">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
