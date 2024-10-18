import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-poppins">{children}</body>
    </html>
  );
}
