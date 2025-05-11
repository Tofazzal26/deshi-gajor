"use client";
import CommonHeadline from "@/CommonHeadline/page";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const LatestReview = () => {
  const [rating, setRating] = useState(5);
  return (
    <div className="container mx-auto">
      <div className="py-10 lg:px-0 px-2">
        <div>
          <CommonHeadline
            title={"Latest Reviews"}
            paragraph={
              "See what people are saying about different companies, based on real experiences."
            }
          />
        </div>
        <div>
          <div className="grid lg:grid-cols-6 gap-4 lg:gap-8 grid-cols-1">
            <div className="lg:col-span-2">
              <div>
                <div className="p-8 rounded-xl howCardShadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                        readOnly={true}
                      />
                      <span className=" text-gray-500 text-sm">(5/5)</span>
                    </div>
                    <h2 className=" text-gray-500 text-sm">2025-04-27</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 my-4 text-lg leading-[30px] h-full lg:h-[440px]">
                      As a PHP developer with over 3 years of experience, I've
                      had the opportunity to collaborate with various clients
                      and organizations, but my recent experience with this
                      company was genuinely refreshing. they were clear about
                      their goals and expectations, and there was no unnecessary
                      pressure to deliver things overnight — which is rare these
                      days. Milestones were defined clearly, payments were
                      released on time, and all communication — whether via
                      email or calls — was respectful and goal-oriented.
                      Overall, it felt less like working for someone and more
                      like working with someone. This was one of the most
                      developer-friendly projects I’ve worked on. I’d be happy
                      to collaborate with them again in the future and highly
                      recommend them to other developers.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={"/user1.png"}
                          height={45}
                          width={45}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg">Himanul Islam</h2>
                        <h2 className="text-sm text-gray-600">PHP Developer</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 grid-cols-1">
                <div className=" p-8 rounded-xl howCardShadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                        readOnly={true}
                      />
                      <span className=" text-gray-500 text-sm">(5/5)</span>
                    </div>
                    <h2 className=" text-gray-500 text-sm">2025-02-05</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 my-4 text-lg leading-[30px]">
                      As a graphic designer, it’s always a pleasure to work with
                      clients who know what they want. Their brief was clear,
                      feedback was constructive, and they trusted my creative
                      direction.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={"/user2.png"}
                          height={45}
                          width={45}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg">Tamim Islam</h2>
                        <h2 className="text-sm text-gray-600">
                          Graphic Designer
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-8 rounded-xl howCardShadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                        readOnly={true}
                      />
                      <span className=" text-gray-500 text-sm">(5/5)</span>
                    </div>
                    <h2 className=" text-gray-500 text-sm">2025-03-12</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 my-4 text-lg leading-[30px]">
                      Lack of clear goals and delayed communication made the
                      project frustrating. Revisions kept changing direction,
                      wasting time and effort. Would think twice before working
                      again.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={"/user3.png"}
                          height={45}
                          width={45}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg">Alif Hossain</h2>
                        <h2 className="text-sm text-gray-600">
                          Digital Marketer
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-8 rounded-xl howCardShadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                        readOnly={true}
                      />
                      <span className=" text-gray-500 text-sm">(5/5)</span>
                    </div>
                    <h2 className=" text-gray-500 text-sm">2025-01-18</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 my-4 text-lg leading-[30px]">
                      Poorly defined requirements and frequent scope changes
                      made the project chaotic. Communication gaps slowed
                      progress, and technical decisions were often overridden
                      without discussion.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={"/user4.png"}
                          height={45}
                          width={45}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg">Alamin Islam</h2>
                        <h2 className="text-sm text-gray-600">
                          .NET Developer
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-8 rounded-xl howCardShadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        onChange={setRating}
                        readOnly={true}
                      />
                      <span className=" text-gray-500 text-sm">(5/5)</span>
                    </div>
                    <h2 className=" text-gray-500 text-sm">2024-11-24</h2>
                  </div>
                  <div>
                    <p className="text-gray-600 my-4 text-lg leading-[30px]">
                      Security best practices were often ignored despite
                      repeated recommendations. Sensitive data handling was
                      careless, and there was little interest in fixing
                      vulnerabilities. Disappointing experience.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src={"/user5.png"}
                          height={45}
                          width={45}
                          alt="user"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg">Md Mirajul</h2>
                        <h2 className="text-sm text-gray-600">Cybersecurity</h2>
                      </div>
                    </div>
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

export default LatestReview;
