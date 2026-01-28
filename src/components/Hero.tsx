import { ChevronDown, MapPin, Sparkles } from "lucide-react";
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
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer overlay for better text readability while showing image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Destinasi Wisata Keluarga Terbaik</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            THR Sumber
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              Duren
            </span>
          </h1>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 text-white/80 mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Malang, Jawa Timur</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Nikmati kesegaran wisata air alami di tengah keindahan alam Malang. 
            Destinasi liburan keluarga terbaik dengan fasilitas lengkap.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={scrollToDestinasi}
              className="btn-gradient text-white border-0 font-semibold px-8 h-14 text-base rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Jelajahi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base rounded-full backdrop-blur-sm"
              onClick={() => document.querySelector("#informasi")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lihat Tiket
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDestinasi}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </button>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;