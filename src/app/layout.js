import Footer from "@/components/Footer";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import Header from "@/components/Header";

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
        <body>
          <div className="flex flex-col w-full bg-white overflow-visible">
            <Header className="sticky top-0 z-40 w-full border-b bg-background" />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
