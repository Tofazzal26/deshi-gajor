"use client";
import CheckoutForm from "@/app/CheckoutForm/page";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);
const Donate = () => {
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  const handleAmount = (e) => {
    const input = e.target.value;
    const parsed = parseInt(input);
    if (input === "" || isNaN(parsed) || parsed <= 0) {
      toast.error("Please type a valid number");
      return;
    }
    setAmount(parsed);
  };

  return (
    <div className="container mx-auto">
      <div className="my-10 lg:my-20 lg:px-0 px-2">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl">
            🚨 Gaza needs your urgent relief.
          </h2>
          <button className="text-2xl lg:text-4xl mt-2 lg:mt-4 text-[#c2203c]">
            Please donate
          </button>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-5 mt-10">
          <div>
            <h2 className="text-[#0b4f41] text-2xl lg:text-4xl">Help us,</h2>
            <h2 className="text-[#0b4f41] text-2xl lg:text-4xl mt-2">
              Heal Palestine.
            </h2>
            <p className="text-gray-500 text-base lg:text-lg lg:w-[700px] mt-3 lg:mt-4">
              At HEAL Palestine, we envision a Palestine where every child and
              young adult has access to quality healthcare, education, urgent
              aid, and opportunities to thrive.
            </p>
            <p className="text-gray-500 text-base lg:text-lg lg:w-[715px] mt-3 lg:mt-4">
              We believe in addressing the urgent medical needs of injured and
              sick children, building up health services, educating the next
              generation of leaders, and nurturing the potential of Palestinian
              youth, helping them develop into confident, informed, and
              compassionate individuals who can contribute to their communities
              and beyond.
            </p>
            <div className="lg:space-x-4 space-x-2 mt-2 lg:mt-8">
              <button
                onClick={() => router.push("/api/blog")}
                className="bg-[#0b4f41] text-white cursor-pointer text-base lg:text-lg px-4 lg:px-6 py-2 rounded-sm"
              >
                See Our Blogs
              </button>
              <button
                onClick={() => router.push("/api/contact")}
                className="bg-[#0b4f41] text-white text-base cursor-pointer lg:text-lg px-4 lg:px-6 py-2 rounded-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:flex-1 border-2 border-[#e5e5e5] rounded-sm p-5">
            <div>
              <h2 className="text-2xl text-center mb-2">
                Please Write Amount $
              </h2>
              <input
                type="number"
                placeholder="Amount.."
                onChange={handleAmount}
                min={1}
                className="lg:py-[15px] py-2 mt-2 mb-4 px-3 w-full lg:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
              />
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={amount} />
            </Elements>
          </div>
        </div>
        <div className="grid mt-10 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="howCardShadow">
            <div>
              <img
                src="/donate1.jpg"
                alt=""
                className="object-cover object-center w-full h-72"
              />
            </div>

            <div className="p-4">
              <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold tracking-wide text-[#0b4f41]">
                  Emergency Prayer Centers
                </h2>
              </div>
              <p className="text-gray-500 text-center">
                Mauris et lorem at elit tristique dignissim et ullamcorper elit.
                Make a profound difference by contributing to the construction
                of temporary masjids, offering spiritual solace and a sacred
                place of prayer for displaced families.
              </p>
            </div>
          </div>
          <div className="howCardShadow">
            <div>
              <img
                src="/donate2.jpg"
                alt=""
                className="object-cover object-center w-full h-72"
              />
            </div>

            <div className="p-4">
              <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold tracking-wide text-[#0b4f41]">
                  Restoration of Water Wells
                </h2>
              </div>
              <p className="text-gray-500 text-center">
                Restoration of damaged water wells, ensuring the people of Gaza
                receive a sustainable and reliable supply of clean water. This
                vital initiative supports the health and well-being of these
                resilient communities, fostering a brighter and more secure
                future.
              </p>
            </div>
          </div>
          <div className="howCardShadow">
            <div>
              <img
                src="/donate5.jpg"
                alt=""
                className="object-cover object-center w-full h-72"
              />
            </div>

            <div className="p-4">
              <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold tracking-wide text-[#0b4f41]">
                  Food Support for Gaza Orphans
                </h2>
              </div>
              <p className="text-gray-500 text-center">
                Donate to our food aid program, you ensure that these vulnerable
                children receive the nourishment they need to grow and thrive.
                This is more than just a meal, it's a message that someone
                cares, that they are not alone in their struggles.
              </p>
            </div>
          </div>
          <div className="howCardShadow">
            <div>
              <img
                src="/donate4.jpg"
                alt=""
                className="object-cover object-center w-full h-72"
              />
            </div>

            <div className="p-4">
              <div className="mt-6 mb-2 text-center">
                <h2 className="text-xl font-semibold tracking-wide text-[#0b4f41]">
                  Give 1500 Litres of Water to Gaza
                </h2>
              </div>
              <p className="text-gray-500 text-center">
                Water is a lifeline, yet thousands in Gaza struggle with severe
                shortages. Your support can provide 1500 litres of safe,
                drinkable water to families in need—offering comfort, health,
                and hope. Every drop helps ease suffering, ensuring that
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
