import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CardFragment({
  header, // Elemen untuk header (teks, gambar, atau ikon)
  content, // Elemen untuk konten utama (teks atau dll)
  footer, // Elemen untuk footer (harga, tombol, atau dll)
  className = "w-full flex-shrink-0",
  minHeight = "min-h-[350px]",
}) {
  return (
    <Card
      className={`flex flex-col border rounded-lg shadow-md ${minHeight} ${className}`}
    >
      <CardHeader className="bg-secondary p-3 min-h-20">{header}</CardHeader>
      <CardContent className="flex-1 p-4">
        {typeof content === "string" ? <p>{content}</p> : content}
      </CardContent>
      <CardFooter className="p-3">{footer}</CardFooter>
    </Card>
  );
}
