import DestinationCard from "./DestinationCard";
import kolamRenang from "@/assets/kolam-renang.jpg";
import wahanaAnak from "@/assets/wahana-anak.jpg";
import kuliner from "@/assets/kuliner.jpg";
import taman from "@/assets/taman.jpg";
import sumberAir from "@/assets/sumber-air.jpg";

const destinations = [
  {
    image: kolamRenang,
    title: "Kolam Renang Utama",
    description: "Kolam renang berukuran besar dengan air jernih dari sumber alami. Dilengkapi dengan area dangkal untuk anak-anak.",
    category: "Wisata Air",
  },
  {
    image: wahanaAnak,
    title: "Wahana Bermain Anak",
    description: "Area bermain air khusus anak-anak dengan perosotan warna-warni dan water playground yang aman.",
    category: "Keluarga",
  },
  {
    image: sumberAir,
    title: "Sumber Air Alami",
    description: "Nikmati kesegaran air dari mata air pegunungan yang mengalir langsung ke kolam-kolam pemandian.",
    category: "Wisata Alam",
  },
  {
    image: taman,
    title: "Taman & Gazebo",
    description: "Area bersantai dengan gazebo-gazebo nyaman di tengah taman tropis yang rindang dan asri.",
    category: "Relaksasi",
  },
  {
    image: kuliner,
    title: "Wisata Kuliner",
    description: "Berbagai pilihan makanan khas Malang dan kuliner nusantara tersedia di area food court kami.",
    category: "Kuliner",
  },
];

const Destinations = () => {
  return (
    <section id="destinasi" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Destinasi Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Jelajahi Keindahan <span className="text-gradient">Sumber Duren</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan berbagai wahana dan fasilitas menarik yang siap memanjakan liburan Anda bersama keluarga tercinta.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
