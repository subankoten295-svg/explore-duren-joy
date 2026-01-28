import { useState, useEffect } from "react";
import { Menu, X, Droplets } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Destinasi", href: "#destinasi" },
  { name: "Informasi", href: "#informasi" },
  { name: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-effect py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl transition-all duration-300 ${
              scrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <Droplets className={`w-6 h-6 ${scrolled ? "text-primary-foreground" : "text-white"}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}>
                THR Sumber Duren
              </span>
              <span className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}>
                Malang
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  scrolled 
                    ? "text-foreground/80 hover:text-primary hover:bg-primary/10" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-border shadow-lg animate-fade-up">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors duration-200 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;