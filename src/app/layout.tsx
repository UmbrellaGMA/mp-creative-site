import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MP Creative | Agência de Marketing Digital",
  description: "Estratégias de marketing, branding e performance para empresas que querem crescer de verdade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans bg-brand-dark text-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
