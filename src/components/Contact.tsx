import { Instagram, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const phoneNumber = "087751122679";
  const whatsappLink = `https://wa.me/62${phoneNumber.substring(1)}`;
  const instagramLink = "https://www.instagram.com/thr_sumberduren?igsh=MWV0YXNnb3NrNWJxNg==";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+RT.32+RW.010+Kecopokan+Kec.+Sumberpucung+Kabupaten+Malang+Jawa+Timur+65165";

  const contactItems = [
    {
      icon: MapPin,
      title: "Lokasi",
      content: (
        <>
          Jl. Raya, RT.32/RW.010<br />
          Kecopokan Kec. Sumberpucung<br />
          Kabupaten Malang, Jawa Tim 65165
        </>
      ),
      link: mapsLink,
      linkText: "Lihat di Maps",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      hoverBg: "group-hover:bg-primary/20",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: phoneNumber,
      link: whatsappLink,
      linkText: "Chat Sekarang",
      iconBg: "bg-[#25D366]/10",
      iconColor: "text-[#25D366]",
      hoverBg: "group-hover:bg-[#25D366]/20",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@thr_sumberduren",
      link: instagramLink,
      linkText: "Follow Kami",
      iconBg: "bg-[#E1306C]/10",
      iconColor: "text-[#E1306C]",
      hoverBg: "group-hover:bg-[#E1306C]/20",
    },
  ];

  return (
    <section id="kontak" className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">
            💬 Hubungi Kami
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ada <span className="text-gradient">Pertanyaan?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda merencanakan kunjungan yang sempurna.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="border border-border/50 hover-lift h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col items-center text-center gap-5 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${item.iconBg} ${item.hoverBg} transition-colors flex items-center justify-center`}>
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-serif font-bold text-lg text-card-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {item.content}
                      </p>
                    </div>

                    {/* Link */}
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold ${item.iconColor} group-hover:gap-3 transition-all`}>
                      {item.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;