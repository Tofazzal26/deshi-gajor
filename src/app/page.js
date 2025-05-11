import Banner from "@/Components/Banner/page";
import HowWorks from "@/HowWorks/page";
import LatestReview from "@/LatestReview/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <HowWorks />
      <LatestReview />
    </div>
  );
}
