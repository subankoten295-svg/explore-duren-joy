import { Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-forest to-forest/95 text-white py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl">THR Sumber Duren</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary" />

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} THR Sumber Duren. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;