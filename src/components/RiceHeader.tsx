import { Wheat } from "lucide-react";

const RiceHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-stone-900 dark:to-yellow-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-100/80 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-sm font-medium mb-6">
          <Wheat className="w-4 h-4" />
          <span>AI Rice Price Detector</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-stone-100 mb-4 leading-tight">
          Deteksi Harga
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
            Beras Indonesia
          </span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Foto beras Anda, dan AI akan mengidentifikasi jenis serta estimasi harga
          berdasarkan data Kementerian Perdagangan RI 2026.
        </p>
      </div>
    </header>
  );
};

export default RiceHeader;
