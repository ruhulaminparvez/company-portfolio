import HeroSlider from "@/components/heroSlider/HeroSlider";
import Services from "@/components/services/Services";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Showcase from "@/components/showcase/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Services />
      <Showcase />
      {/* <Footer />/ */}
    </main>
  );
}
