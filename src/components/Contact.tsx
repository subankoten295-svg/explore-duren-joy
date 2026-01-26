import { Instagram, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
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
          {/* Address Card */}
          <Card className="border-0 card-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Alamat</h4>
                  <p className="text-muted-foreground text-sm">
                    Jl. Raya, RT.32/RW.010, Kecopokan<br />
                    Kec. Sumberpucung, Kabupaten Malang<br />
                    Jawa Timur 65165
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="border-0 card-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Telepon</h4>
                  <p className="text-muted-foreground text-sm">
                    0857-3001-3549 (WhatsApp)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Card */}
          <Card className="border-0 water-gradient text-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <h4 className="font-semibold">Ikuti Media Sosial Kami</h4>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
