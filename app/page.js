import HeroSlider from "@/components/heroSlider/HeroSlider";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Footer />
    </main>
  );
}
