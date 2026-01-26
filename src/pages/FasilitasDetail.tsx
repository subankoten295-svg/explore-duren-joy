import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import fasilitasDapoer from "@/assets/fasilitas-dapoer.jpg";
import fasilitasTamanPohon from "@/assets/fasilitas-taman-pohon.jpg";
import fasilitasAreaSantai from "@/assets/fasilitas-area-santai.jpg";
import fasilitasMusholla from "@/assets/fasilitas-musholla.jpg";
import fasilitasGazebo from "@/assets/fasilitas-gazebo.jpg";
import fasilitasWarung from "@/assets/fasilitas-warung.jpg";
import fasilitasKolamPancing from "@/assets/fasilitas-kolam-pancing.jpg";
import fasilitasMusicCorner from "@/assets/fasilitas-music-corner.jpg";

const facilitiesData: Record<string, {
  image: string;
  title: string;
  description: string;
  category: string;
  fullDescription: string;
  features: string[];
}> = {
  "kolam-pancing": {
    image: fasilitasKolamPancing,
    title: "Kolam Pancing",
    description: "Nikmati serunya memancing ikan Mujaer, Bandeng, dan Tombro dengan suasana alam yang asri.",
    category: "Wisata Alam",
    fullDescription: "Kolam Pancing THR Sumber Duren menawarkan pengalaman memancing yang menyenangkan bagi seluruh keluarga. Dengan suasana alam yang asri dan udara pegunungan yang sejuk, Anda dapat menikmati waktu berkualitas sambil menunggu ikan menggigit umpan.",
    features: [
      "Berbagai jenis ikan: Mujaer, Bandeng, Tombro",
      "Peralatan pancing tersedia untuk disewa",
      "Area teduh dengan pepohonan rindang",
      "Cocok untuk pemula hingga profesional",
    ],
  },
  "dapoer-thr": {
    image: fasilitasDapoer,
    title: "Dapoer THR Sumber Duren",
    description: "Area kuliner dengan berbagai menu makanan lezat dan minuman segar untuk pengunjung.",
    category: "Kuliner",
    fullDescription: "Dapoer THR Sumber Duren adalah pusat kuliner yang menyajikan berbagai hidangan lezat dengan cita rasa khas Malang. Dari makanan tradisional hingga minuman segar, semua tersedia untuk menemani liburan Anda.",
    features: [
      "Menu makanan tradisional Jawa",
      "Minuman segar dari bahan alami",
      "Harga terjangkau",
      "Tempat duduk yang nyaman",
    ],
  },
  "warung-budaya": {
    image: fasilitasWarung,
    title: "Warung Budaya",
    description: "Warung tradisional dengan arsitektur khas Jawa yang dikelilingi taman tropis yang indah.",
    category: "Kuliner",
    fullDescription: "Warung Budaya menghadirkan nuansa tradisional Jawa dengan arsitektur klasik yang memukau. Nikmati makanan dan minuman sambil merasakan suasana tempo dulu yang menenangkan.",
    features: [
      "Arsitektur tradisional Jawa",
      "Suasana klasik dan nyaman",
      "Dikelilingi taman tropis",
      "Spot foto instagramable",
    ],
  },
  "taman-gazebo": {
    image: fasilitasGazebo,
    title: "Taman & Gazebo",
    description: "Area hijau yang luas dengan gazebo untuk bersantai menikmati udara segar pegunungan.",
    category: "Relaksasi",
    fullDescription: "Taman dan Gazebo THR Sumber Duren adalah tempat sempurna untuk bersantai dan menikmati keindahan alam. Dengan hamparan rumput hijau dan gazebo yang teduh, Anda dapat melepas penat dari kesibukan sehari-hari.",
    features: [
      "Gazebo teduh untuk bersantai",
      "Taman hijau yang luas",
      "Udara sejuk pegunungan",
      "Cocok untuk piknik keluarga",
    ],
  },
  "area-santai": {
    image: fasilitasAreaSantai,
    title: "Area Santai",
    description: "Tempat duduk nyaman di bawah rindangnya pepohonan untuk berkumpul bersama keluarga.",
    category: "Keluarga",
    fullDescription: "Area Santai menyediakan tempat yang nyaman untuk berkumpul bersama keluarga. Di bawah rindangnya pepohonan, Anda dapat berbincang santai sambil menikmati suasana alam yang menenangkan.",
    features: [
      "Tempat duduk yang nyaman",
      "Di bawah pepohonan rindang",
      "Suasana tenang dan damai",
      "Cocok untuk berkumpul keluarga",
    ],
  },
  "musholla": {
    image: fasilitasMusholla,
    title: "Musholla",
    description: "Fasilitas ibadah yang bersih dan nyaman untuk menunaikan sholat bagi pengunjung.",
    category: "Fasilitas",
    fullDescription: "Musholla THR Sumber Duren menyediakan tempat ibadah yang bersih, nyaman, dan tenang bagi pengunjung muslim. Dilengkapi dengan fasilitas wudhu yang memadai.",
    features: [
      "Tempat wudhu yang bersih",
      "Ruangan ber-AC",
      "Perlengkapan sholat tersedia",
      "Lokasi strategis di area wisata",
    ],
  },
  "music-corner": {
    image: fasilitasMusicCorner,
    title: "Music Corner",
    description: "Panggung musik outdoor untuk hiburan dan penampilan live music di tengah suasana alam.",
    category: "Hiburan",
    fullDescription: "Music Corner THR Sumber Duren adalah panggung musik outdoor yang menghadirkan hiburan live music di tengah suasana alam yang asri. Tempat yang sempurna untuk menikmati pertunjukan musik sambil bersantai bersama keluarga dan teman.",
    features: [
      "Panggung musik outdoor",
      "Pertunjukan live music",
      "Suasana alam yang asri",
      "Cocok untuk acara komunitas",
    ],
  },
};

const FasilitasDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const facility = slug ? facilitiesData[slug] : null;

  if (!facility) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan</h1>
          <Link to="/">
            <Button>Kembali ke Beranda</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-forest text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary mb-3">
              {facility.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white">
              {facility.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Tentang {facility.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {facility.fullDescription}
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Fasilitas & Keunggulan
              </h3>
              <ul className="space-y-3">
                {facility.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Informasi</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Jam Operasional</p>
                      <p className="text-sm text-muted-foreground">Setiap Hari: 09.00 - 17.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Lokasi</p>
                      <p className="text-sm text-muted-foreground">Desa Duren, Kec. Pakisaji, Malang</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Telepon</p>
                      <p className="text-sm text-muted-foreground">0857-3001-3549</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FasilitasDetail;
