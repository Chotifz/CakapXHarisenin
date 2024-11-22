import "./globals.css";
import Header from "@/components/Header";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata = {
  title: "Kursus Online Bersertifikat & Pelatihan Keterampilan Kerja - Cakap",
  description:
    "Cakap menyediakan kursus online bersertifikat dan pelatihan keterampilan kerja, membantu individu meningkatkan kemampuan profesional dengan pilihan pembelajaran fleksibel. Fokus pada pendidikan yang dapat diakses, Cakap mendukung pengguna untuk mengembangkan keterampilan yang berharga untuk kemajuan karier.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="font-nunito">
          <div className="flex flex-col bg-white overflow-hidden">
            <Header />
            {children}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
