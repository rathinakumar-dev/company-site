import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChoose";
import OurServices from "@/components/OurServices";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-zinc-300 dark:bg-black font-inter min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <Feedback />
      <Footer />
    </div>
  );
}
