import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: "Image is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `Kamu adalah ahli beras Indonesia. Analisis foto beras yang diberikan dan identifikasi:
1. Jenis/varietas beras (misalnya: Beras Premium, Beras Medium, Beras IR64, Beras Pandan Wangi, Beras Rojolele, Beras Ciherang, Beras Mentik Wangi, Beras Ketan Putih, Beras Ketan Hitam, Beras Merah, Beras Hitam, dll)
2. Kualitas beras (Premium, Medium, atau Rendah)
3. Estimasi harga per kg berdasarkan data harga beras Kementerian Perdagangan RI tahun 2025-2026

Data referensi harga beras Indonesia (Kemendag RI, Maret 2026):
- Beras Premium: Rp 15.800 - Rp 16.500/kg
- Beras Medium: Rp 13.200 - Rp 13.800/kg  
- Beras IR64 Premium: Rp 15.500 - Rp 16.000/kg
- Beras IR64 Medium: Rp 13.000 - Rp 13.500/kg
- Beras Pandan Wangi: Rp 17.000 - Rp 19.500/kg
- Beras Rojolele: Rp 16.500 - Rp 18.000/kg
- Beras Ciherang: Rp 14.500 - Rp 15.500/kg
- Beras Mentik Wangi: Rp 18.000 - Rp 22.000/kg
- Beras Ketan Putih: Rp 18.000 - Rp 20.000/kg
- Beras Ketan Hitam: Rp 22.000 - Rp 28.000/kg
- Beras Merah: Rp 20.000 - Rp 25.000/kg
- Beras Hitam (Organik): Rp 25.000 - Rp 35.000/kg
- Beras Basmati (Impor): Rp 30.000 - Rp 45.000/kg

HET (Harga Eceran Tertinggi) Pemerintah 2026:
- Beras Premium: Rp 15.800/kg
- Beras Medium: Rp 13.200/kg

PENTING: Jawab HANYA dalam format JSON berikut tanpa markdown atau teks lain:
{
  "jenis_beras": "nama jenis beras",
  "kualitas": "Premium/Medium/Rendah",
  "harga_min": 13000,
  "harga_max": 16000,
  "harga_het": 15800,
  "deskripsi": "deskripsi singkat tentang beras ini",
  "ciri_ciri": ["ciri 1", "ciri 2", "ciri 3"],
  "sumber_data": "Kementerian Perdagangan RI, Maret 2026",
  "confidence": 85
}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: [
                { type: "text", text: "Analisis foto beras ini dan berikan informasi jenis dan harganya dalam format JSON." },
                {
                  type: "image_url",
                  image_url: { url: imageBase64 },
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Terlalu banyak permintaan, coba lagi nanti." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Kredit AI habis." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      return new Response(
        JSON.stringify({ error: "Gagal menganalisis gambar" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    // Parse JSON from response
    let result;
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch {
      result = null;
    }

    if (!result) {
      return new Response(
        JSON.stringify({ error: "Gagal memproses hasil analisis", raw: content }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
