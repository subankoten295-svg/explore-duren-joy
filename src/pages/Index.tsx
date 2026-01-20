import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Information from "@/components/Information";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Destinations />
      <Information />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
