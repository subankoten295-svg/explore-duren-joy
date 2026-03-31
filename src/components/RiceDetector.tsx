import { useState, useRef } from "react";
import { Camera, Upload, Loader2, Wheat, BadgeCheck, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface RiceResult {
  jenis_beras: string;
  kualitas: string;
  harga_min: number;
  harga_max: number;
  harga_het: number;
  deskripsi: string;
  ciri_ciri: string[];
  sumber_data: string;
  confidence: number;
}

const RiceDetector = () => {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<RiceResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Hanya file gambar yang diperbolehkan");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Ukuran file maksimal 10MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const analyze = async () => {
    if (!image) return;
    setIsAnalyzing(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-rice", {
        body: { imageBase64: image },
      });

      if (error) throw new Error(error.message);
      if (!data?.success) throw new Error(data?.error || "Gagal menganalisis");

      setResult(data.data);
      toast.success("Analisis berhasil!");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Gagal menganalisis beras");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatRupiah = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);

  const reset = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Upload Area */}
        {!image ? (
          <Card className="border-2 border-dashed border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="flex flex-col items-center justify-center py-16 gap-6">
              <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                <Camera className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
                  Foto atau Upload Gambar Beras
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Ambil foto langsung atau upload dari galeri. Format: JPG, PNG (maks 10MB)
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8"
                  onClick={() => cameraInputRef.current?.click()}
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Ambil Foto
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-300 dark:border-amber-700 rounded-full px-8"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Gambar
                </Button>
              </div>
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Preview */}
            <Card className="overflow-hidden">
              <div className="relative">
                <img src={image} alt="Preview beras" className="w-full max-h-96 object-contain bg-stone-100 dark:bg-stone-800" />
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 text-white">
                      <Loader2 className="w-10 h-10 animate-spin" />
                      <span className="text-sm font-medium">Menganalisis beras...</span>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="flex gap-3 py-4">
                <Button
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white rounded-full"
                  onClick={analyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Menganalisis...</>
                  ) : (
                    <><Wheat className="w-4 h-4 mr-2" /> Analisis Beras</>
                  )}
                </Button>
                <Button variant="outline" className="rounded-full" onClick={reset} disabled={isAnalyzing}>
                  Ganti Foto
                </Button>
              </CardContent>
            </Card>

            {/* Result */}
            {result && (
              <Card className="border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 animate-fade-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-stone-800 dark:text-stone-200">
                    <BadgeCheck className="w-6 h-6 text-green-600" />
                    Hasil Analisis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Main info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/50">
                      <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Jenis Beras</p>
                      <p className="text-xl font-bold text-stone-800 dark:text-stone-100">{result.jenis_beras}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/70 dark:bg-stone-800/50">
                      <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Kualitas</p>
                      <p className="text-xl font-bold text-stone-800 dark:text-stone-100">{result.kualitas}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">Estimasi Harga per Kg</span>
                    </div>
                    <p className="text-3xl font-bold">
                      {formatRupiah(result.harga_min)} — {formatRupiah(result.harga_max)}
                    </p>
                    {result.harga_het > 0 && (
                      <p className="text-sm mt-1 text-white/80">HET Pemerintah: {formatRupiah(result.harga_het)}/kg</p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-stone-700 dark:text-stone-300">{result.deskripsi}</p>
                    {result.ciri_ciri?.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-2">Ciri-ciri:</p>
                        <ul className="space-y-1">
                          {result.ciri_ciri.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 pt-2 border-t border-amber-200 dark:border-amber-800">
                    <Info className="w-3.5 h-3.5" />
                    <span>Sumber: {result.sumber_data} • Confidence: {result.confidence}%</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default RiceDetector;
