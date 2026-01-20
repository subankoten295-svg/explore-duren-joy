import { Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="text-center">
              <span className="font-serif font-bold text-lg">THR Sumber Duren</span>
              <p className="text-white/60 text-sm">Malang, Jawa Timur</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/60 text-center">
            <span>© {currentYear} THR Sumber Duren</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
