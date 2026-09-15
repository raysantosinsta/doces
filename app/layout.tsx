import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasmine Dantas Doceria",
  description: "Adoçando momentos inesquecíveis. Faça seu pedido pelo WhatsApp.",
};

import { CustomCursor } from "./components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-cream text-chocolate antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
