import Banner from "@/Components/Banner/page";
import Faq from "@/Faq/page";
import HowWorks from "@/HowWorks/page";
import LatestReview from "@/LatestReview/page";
import Testimonial from "@/Testimonial/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <HowWorks />
      <LatestReview />
      <Testimonial />
      <Faq />
    </div>
  );
}
