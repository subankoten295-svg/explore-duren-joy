import { Clock, Ticket, Car, Lightbulb, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const infoItems = [
  {
    icon: Clock,
    title: "Jam Operasional",
    items: [
      "Senin - Jumat: 08.00 - 17.00 WIB",
      "Sabtu - Minggu: 07.00 - 18.00 WIB",
      "Hari Libur Nasional: 07.00 - 18.00 WIB",
    ],
  },
  {
    icon: Ticket,
    title: "Harga Tiket",
    items: [
      "Dewasa: Rp 25.000 / orang",
      "Anak-anak: Rp 15.000 / orang",
      "Paket Keluarga (4 orang): Rp 75.000",
      "Sewa Gazebo: Rp 50.000 - Rp 100.000",
    ],
  },
  {
    icon: Car,
    title: "Akses Transportasi",
    items: [
      "30 menit dari pusat Kota Malang",
      "Tersedia parkir luas untuk mobil & motor",
      "Bisa dijangkau dengan angkutan umum",
      "Koordinat GPS: -7.9234, 112.6127",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {infoItems.map((item, index) => (
            <Card
              key={item.title}
              className="border-0 card-shadow hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2">
                      {item.items.map((text, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
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

        {/* Location Highlight */}
        <Card className="border-0 nature-gradient text-white overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Lokasi Strategis
                </h3>
                <p className="text-white/90 mb-6">
                  THR Sumber Duren terletak di kawasan yang sejuk dengan akses mudah dari pusat Kota Malang. 
                  Nikmati perjalanan yang menyenangkan melewati pemandangan alam yang indah.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Desa Duren, Kec. Pakisaji, Malang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">(0341) 123-4567</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-80 h-48 bg-white/20 rounded-xl flex items-center justify-center">
                <iframe
                  title="Lokasi THR Sumber Duren"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.0!2d112.6!3d-7.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTUnMTIuMCJTIDExMsKwMzYnNDUuNiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  className="w-full h-full rounded-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Information;
