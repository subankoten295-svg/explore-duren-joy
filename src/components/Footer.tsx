import { Droplets, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg">THR Sumber Duren</span>
              <p className="text-white/60 text-sm">Malang, Jawa Timur</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#beranda" className="text-white/70 hover:text-white transition-colors">Beranda</a>
            <a href="#destinasi" className="text-white/70 hover:text-white transition-colors">Destinasi</a>
            <a href="#galeri" className="text-white/70 hover:text-white transition-colors">Galeri</a>
            <a href="#informasi" className="text-white/70 hover:text-white transition-colors">Informasi</a>
            <a href="#kontak" className="text-white/70 hover:text-white transition-colors">Kontak</a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-white/60">
            <span>© {currentYear} THR Sumber Duren</span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
