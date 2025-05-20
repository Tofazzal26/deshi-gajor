export const dynamic = "force-dynamic";
import Banner from "@/Components/Banner/page";
import Faq from "@/Faq/page";
import HowWorks from "@/HowWorks/page";
import LatestReview from "@/LatestReview/page";
import ReviewSection from "@/ReviewSection/page";
import Testimonial from "@/Testimonial/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <ReviewSection />
      <HowWorks />
      <LatestReview />
      <Testimonial />
      <Faq />
    </div>
  );
}
