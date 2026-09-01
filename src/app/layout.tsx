import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ТЕЙРА (TEIRA) — Селекционный чай с высокогорных плантаций",
  description: "Коллекционный китайский, тайваньский и крафтовый чай прямого импорта. Терруарная прозрачность, свежие сборы 2026 года и церемониальная культура.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen bg-[#FAF7F2] text-[#121A14]">
        {children}
      </body>
    </html>
  );
}
