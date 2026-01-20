import { useState } from "react";
import { Send, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 card-shadow">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-serif text-2xl font-semibold text-card-foreground mb-6">
                Kirim Pesan
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="No. Telepon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Alamat</h4>
                    <p className="text-muted-foreground text-sm">
                      Jl. Raya Sumber Duren, Desa Duren<br />
                      Kec. Pakisaji, Kabupaten Malang<br />
                      Jawa Timur 65162
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
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

            {/* Social Media */}
            <Card className="border-0 water-gradient text-white">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Ikuti Media Sosial Kami</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
