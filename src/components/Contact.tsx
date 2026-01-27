import { Instagram, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const phoneNumber = "087751122679";
  const whatsappLink = `https://wa.me/62${phoneNumber.substring(1)}`;
  const instagramLink = "https://www.instagram.com/thr_sumberduren?igsh=MWV0YXNnb3NrNWJxNg==";

  return (
    <section id="kontak" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ada <span className="text-gradient">Pertanyaan?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda merencanakan kunjungan yang sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Address Card */}
          <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground text-lg mb-2">Alamat</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Jl. Raya, RT.32/RW.010, Kecopokan<br />
                    Kec. Sumberpucung, Kabupaten Malang<br />
                    Jawa Timur 65165
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                  <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">WhatsApp</h4>
                    <p className="text-white/90 text-sm mb-3">
                      Hubungi kami langsung
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Instagram Card */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white">
              <CardContent className="p-8 h-full">
                <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                  <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Instagram</h4>
                    <p className="text-white/90 text-sm mb-3">
                      Ikuti kami di Instagram
                    </p>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                      @thr_sumberduren
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
