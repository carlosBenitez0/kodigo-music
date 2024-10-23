import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";




const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kodigo Music",
  description:
    "Descubre y disfruta de tus canciones favoritas, albumes y artistas en Kodigo Music, la mejor app para amantes de la música.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
