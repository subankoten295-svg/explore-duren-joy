import DestinationCard from "./DestinationCard";
import fasilitasDapoer from "@/assets/fasilitas-dapoer.jpg";
import fasilitasTamanPohon from "@/assets/fasilitas-taman-pohon.jpg";
import fasilitasAreaSantai from "@/assets/fasilitas-area-santai.jpg";
import fasilitasMusholla from "@/assets/fasilitas-musholla.jpg";
import fasilitasGazebo from "@/assets/fasilitas-gazebo.jpg";
import fasilitasWarung from "@/assets/fasilitas-warung.jpg";
import fasilitasKolamPancing from "@/assets/fasilitas-kolam-pancing.jpg";
import fasilitasMusicCorner from "@/assets/fasilitas-music-corner.jpg";

const destinations = [
  {
    image: fasilitasKolamPancing,
    title: "Kolam Pancing",
    description: "Nikmati serunya memancing ikan Mujaer, Bandeng, dan Tombro dengan suasana alam yang asri.",
    category: "Wisata Alam",
    slug: "kolam-pancing",
  },
  {
    image: fasilitasDapoer,
    title: "Dapoer THR Sumber Duren",
    description: "Area kuliner dengan berbagai menu makanan lezat dan minuman segar untuk pengunjung.",
    category: "Kuliner",
    slug: "dapoer-thr",
  },
  {
    image: fasilitasWarung,
    title: "Warung Budaya",
    description: "Warung tradisional dengan arsitektur khas Jawa yang dikelilingi taman tropis yang indah.",
    category: "Kuliner",
    slug: "warung-budaya",
  },
  {
    image: fasilitasGazebo,
    title: "Taman & Gazebo",
    description: "Area hijau yang luas dengan gazebo untuk bersantai menikmati udara segar pegunungan.",
    category: "Relaksasi",
    slug: "taman-gazebo",
  },
  {
    image: fasilitasAreaSantai,
    title: "Area Santai",
    description: "Tempat duduk nyaman di bawah rindangnya pepohonan untuk berkumpul bersama keluarga.",
    category: "Keluarga",
    slug: "area-santai",
  },
  {
    image: fasilitasMusholla,
    title: "Musholla",
    description: "Fasilitas ibadah yang bersih dan nyaman untuk menunaikan sholat bagi pengunjung.",
    category: "Fasilitas",
    slug: "musholla",
  },
  {
    image: fasilitasMusicCorner,
    title: "Music Corner",
    description: "Panggung musik outdoor untuk hiburan dan penampilan live music setiap hari Minggu.",
    category: "Hiburan",
    slug: "music-corner",
  },
];

const Destinations = () => {
  return (
    <section id="destinasi" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">
            ✨ Destinasi Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Jelajahi Keindahan{" "}
            <span className="text-gradient">Sumber Duren</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Temukan berbagai wahana dan fasilitas menarik yang siap memanjakan liburan Anda bersama keluarga tercinta.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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