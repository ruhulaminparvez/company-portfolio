import ClientFeedback from "@/components/clientFeedback/ClientFeedback";
import ContactUs from "@/components/contactUs/ContactUs";
import HeroSlider from "@/components/heroSlider/HeroSlider";
import Services from "@/components/services/Services";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Showcase from "@/components/showcase/Showcase";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Services />
      <Showcase />
      <Team />
      <ClientFeedback />
      <ContactUs />
      <Footer />
    </main>
  );
}
