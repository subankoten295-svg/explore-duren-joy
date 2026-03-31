import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const priceData = [
  { jenis: "Beras Premium", min: 15800, max: 16500, het: 15800 },
  { jenis: "Beras Medium", min: 13200, max: 13800, het: 13200 },
  { jenis: "Beras IR64 Premium", min: 15500, max: 16000, het: null },
  { jenis: "Beras Pandan Wangi", min: 17000, max: 19500, het: null },
  { jenis: "Beras Rojolele", min: 16500, max: 18000, het: null },
  { jenis: "Beras Ciherang", min: 14500, max: 15500, het: null },
  { jenis: "Beras Mentik Wangi", min: 18000, max: 22000, het: null },
  { jenis: "Beras Ketan Putih", min: 18000, max: 20000, het: null },
  { jenis: "Beras Ketan Hitam", min: 22000, max: 28000, het: null },
  { jenis: "Beras Merah", min: 20000, max: 25000, het: null },
  { jenis: "Beras Hitam (Organik)", min: 25000, max: 35000, het: null },
  { jenis: "Beras Basmati (Impor)", min: 30000, max: 45000, het: null },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);

const RicePriceTable = () => (
  <section className="container mx-auto px-4 py-12 md:py-16">
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-2xl font-serif text-stone-800 dark:text-stone-200">
            Referensi Harga Beras — Kemendag RI, Maret 2026
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Jenis Beras</TableHead>
                <TableHead className="text-right">Harga Min/kg</TableHead>
                <TableHead className="text-right">Harga Max/kg</TableHead>
                <TableHead className="text-right">HET</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {priceData.map((r) => (
                <TableRow key={r.jenis}>
                  <TableCell className="font-medium">{r.jenis}</TableCell>
                  <TableCell className="text-right">{fmt(r.min)}</TableCell>
                  <TableCell className="text-right">{fmt(r.max)}</TableCell>
                  <TableCell className="text-right">{r.het ? fmt(r.het) : "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default RicePriceTable;
