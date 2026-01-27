import { Clock, Car, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infoItems = [
  {
    icon: Clock,
    title: "Jam Operasional",
    items: [
      "Setiap Hari: 09.00 - 17.00 WIB",
    ],
  },
  {
    icon: Car,
    title: "Biaya Parkir",
    items: [
      "Tiket Masuk: GRATIS",
      "Parkir Mobil: Rp 5.000",
      "Parkir Motor: Rp 3.000",
    ],
  },
  {
    icon: Lightbulb,
    title: "Tips Berkunjung",
    items: [
      "Bawa baju ganti & handuk",
      "Gunakan sunscreen untuk perlindungan",
      "Datang pagi untuk menghindari keramaian",
      "Bawa bekal atau nikmati kuliner lokal",
    ],
  },
];

const Information = () => {
  return (
    <section id="informasi" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Informasi Penting
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Rencanakan <span className="text-gradient">Kunjungan</span> Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Semua informasi yang Anda butuhkan untuk mempersiapkan liburan yang menyenangkan.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {infoItems.map((item, index) => (
            <Card
              key={item.title}
              className="border-0 card-shadow hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.items.map((text, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2 justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Information;
