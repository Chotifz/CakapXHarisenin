import { Inter, Lora, Nunito } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: "400",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: "400",
});
