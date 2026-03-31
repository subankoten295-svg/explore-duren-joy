import RiceDetector from "@/components/RiceDetector";
import RiceHeader from "@/components/RiceHeader";
import RicePriceTable from "@/components/RicePriceTable";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RiceHeader />
      <RiceDetector />
      <RicePriceTable />
      <Footer />
    </div>
  );
};

export default Index;
