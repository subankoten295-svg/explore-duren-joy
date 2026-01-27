import { Instagram, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const phoneNumber = "087751122679";
  const whatsappLink = `https://wa.me/62${phoneNumber.substring(1)}`;
  const instagramLink = "https://www.instagram.com/thr_sumberduren?igsh=MWV0YXNnb3NrNWJxNg==";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+RT.32+RW.010+Kecopokan+Sumberpucung+Malang";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Address Card - Clickable to Maps */}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300 cursor-pointer h-full">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-base mb-2">Lokasi</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Jl. Raya, RT.32/RW.010<br />
                      Kecopokan, Sumberpucung<br />
                      Malang 65165
                    </p>
                    <span className="inline-block mt-3 text-xs text-primary font-medium">
                      Lihat di Maps →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300 cursor-pointer h-full">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors flex items-center justify-center">
                    <Phone className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-base mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">
                      {phoneNumber}
                    </p>
                    <span className="inline-block mt-3 text-xs text-[#25D366] font-medium">
                      Chat Sekarang →
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
            <Card className="border-0 card-shadow group hover:scale-105 transition-all duration-300 cursor-pointer h-full">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#E1306C]/10 group-hover:bg-[#E1306C]/20 transition-colors flex items-center justify-center">
                    <Instagram className="w-7 h-7 text-[#E1306C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground text-base mb-2">Instagram</h4>
                    <p className="text-muted-foreground text-sm">
                      @thr_sumberduren
                    </p>
                    <span className="inline-block mt-3 text-xs text-[#E1306C] font-medium">
                      Follow Kami →
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
