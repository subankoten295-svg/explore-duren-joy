import { ChevronDown, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waterpark.jpg";

const Hero = () => {
  const scrollToDestinasi = () => {
    const element = document.querySelector("#destinasi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="THR Sumber Duren Malang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fade-up">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Malang, Jawa Timur</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            THR Sumber Duren
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Nikmati kesegaran wisata air alami di tengah keindahan alam Malang. 
            Destinasi liburan keluarga terbaik dengan fasilitas lengkap dan pemandangan spektakuler.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToDestinasi}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              Jelajahi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8"
              onClick={() => document.querySelector("#informasi")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Tiket
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.8</span>
              <span className="text-white/70">Rating</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              <span className="font-semibold">50K+</span>
              <span className="text-white/70">Pengunjung/Tahun</span>
            </div>
            <div className="text-white">
              <span className="font-semibold">Est. 1985</span>
              <span className="text-white/70 ml-2">Berdiri</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDestinasi}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
