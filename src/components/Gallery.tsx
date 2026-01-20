import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-waterpark.jpg";
import kolamRenang from "@/assets/kolam-renang.jpg";
import wahanaAnak from "@/assets/wahana-anak.jpg";
import kuliner from "@/assets/kuliner.jpg";
import taman from "@/assets/taman.jpg";
import sumberAir from "@/assets/sumber-air.jpg";

const galleryImages = [
  { src: heroImage, alt: "Pemandangan THR Sumber Duren dari atas" },
  { src: kolamRenang, alt: "Kolam renang utama" },
  { src: wahanaAnak, alt: "Wahana bermain anak" },
  { src: sumberAir, alt: "Sumber air alami" },
  { src: taman, alt: "Taman dan gazebo" },
  { src: kuliner, alt: "Area kuliner" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeri" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Galeri Foto
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Momen <span className="text-gradient">Indah</span> di Sumber Duren
          </h2>
          <p className="text-muted-foreground text-lg">
            Lihat keindahan dan keseruan yang menanti Anda di THR Sumber Duren Malang.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-40 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
