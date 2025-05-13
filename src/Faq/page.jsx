import CommonHeadline from "@/CommonHeadline/page";
import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is this app about?",
      answer:
        "This app allows users to share honest reviews about companies they’ve worked with — both positive and negative — helping others make informed decisions.",
    },
    {
      question: "Who can submit a review?",
      answer:
        "Anyone who has worked with or interacted with a company can submit a review. We encourage genuine experiences from freelancers, employees, or clients.",
    },
    {
      question: "Are the reviews verified?",
      answer:
        "While we do not verify every review manually, our moderation system and reporting options help maintain authenticity and flag suspicious content.",
    },
    {
      question: "Can I edit or delete my review later?",
      answer:
        "Yes, you can edit or remove your review anytime by logging into your account and navigating to your review history.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "Yes, the platform is completely free for users to browse, submit reviews, and explore company insights.",
    },
  ];
  return (
    <div className="lg:px-0 px-2">
      <div className="lg:pb-10 lg:pt-2">
        <div>
          <CommonHeadline
            title={"Frequently Asked Questions"}
            paragraph={"Answers to common questions about using our platform."}
          />
        </div>
        <div className="max-w-4xl mx-auto my-5 lg:my-10 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-[#f2f6f5] rounded-lg"
            >
              <input type="checkbox" />
              <div className="collapse-title text-md  font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
