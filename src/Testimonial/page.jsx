"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [rating, setRating] = useState(5);
  return (
    <div className="container mx-auto">
      <div className="my-8 lg:my-16 lg:px-0 px-2">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-6 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-xl lg:text-5xl lg:w-[380px] leading-[60px]">
                What Our Users Are Really Saying
              </h2>
              <p
                className="text-sm lg:text-lg text-[#4b5563] mt-4 mb-8
             lg:w-[500px]"
              >
                Real feedback from real users. Hear what professionals from
                different fields have experienced while using our platform — the
                good, the honest, and everything in between.
              </p>
              <button className="bg-[#074c3e] rounded-md lg:text-base text-sm lg:px-14 px-10 py-3 lg:py-[14px] text-white mb-6 lg:mb-0">
                See All
              </button>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-3 lg:space-y-6">
                <div className="bg-[#074c3e] text-white rounded-sm p-6 lg:translate-x-[-100px]">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={"/test1.jpg"}
                        height={45}
                        width={45}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg">Siyam Ahmed</h2>
                      <h2 className="text-sm">HR Department</h2>
                    </div>
                  </div>
                  <p className="mt-4 text-sm lg:text-base w-full lg:w-[700px] leading-[30px]">
                    Using this app has been a game-changer for me. The interface
                    is clean and intuitive, and I love how easily I can read and
                    share company reviews. It's now part of my daily research
                    before starting any collaboration.
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={setRating}
                    readOnly={true}
                  />
                </div>
                <div className="bg-[#f9f9fb] rounded-sm p-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={"/test2.jpg"}
                        height={50}
                        width={50}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg">Torikul Islam</h2>
                      <h2 className="text-sm text-gray-600">Web Developer</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm lg:text-base w-full lg:w-[700px] leading-[30px]">
                    This app makes checking company feedback really simple. I
                    found helpful reviews before joining any new team. The
                    interface is clean, the whole experience feels fast and
                    trustworthy. I recommend it to others.
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={setRating}
                    readOnly={true}
                  />
                </div>
                <div className="bg-[#f9f9fb] rounded-sm p-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src={"/test3.jpg"}
                        height={45}
                        width={45}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg">Rahim Ahmed</h2>
                      <h2 className="text-sm text-gray-600">UX/UI</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm lg:text-base w-full lg:w-[700px] leading-[30px]">
                    Great platform for reading honest opinions. It helps me
                    decide which companies to work with. The design is
                    user-friendly, and I like the focus on real reviews. It’s a
                    very useful tool for freelancers.
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={setRating}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
