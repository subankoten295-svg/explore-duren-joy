import { Clock, Car, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infoItems = [
  {
    icon: Clock,
    title: "Jam Operasional",
    items: [
      "Setiap Hari: 09.00 - 17.00 WIB",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Car,
    title: "Biaya Parkir",
    items: [
      "Tiket Masuk: GRATIS",
      "Parkir Mobil: Rp 5.000",
      "Parkir Motor: Rp 3.000",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-600",
  },
];

const Information = () => {
  return (
    <section id="informasi" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-primary" />
        <div className="absolute top-40 right-40 w-3 h-3 rounded-full bg-secondary" />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">
            📋 Informasi Penting
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Rencanakan{" "}
            <span className="text-gradient">Kunjungan</span> Anda
          </h2>
          <p className="text-muted-foreground text-lg">
            Semua informasi yang Anda butuhkan untuk mempersiapkan liburan yang menyenangkan.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {infoItems.map((item, index) => (
            <Card
              key={item.title}
              className="border-0 card-shadow hover-lift animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${item.gradient} p-6 flex items-center gap-4`}>
                  <div className="p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                {/* Content */}
                <div className="p-6 bg-card">
                  <ul className="space-y-3">
                    {item.items.map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                        <span className="text-sm font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Ticket className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Tiket masuk GRATIS untuk semua pengunjung!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;