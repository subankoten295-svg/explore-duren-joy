const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="text-sm text-white/60">© {currentYear} THR Sumber Duren</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
