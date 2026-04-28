import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thekost.id"),
  title: "thekost - Platform Sewa Kost, Villa, dan Homestay",
  description: "thekost: Platform terpercaya untuk mencari dan menyewa kost, villa, dan homestay dengan mudah, aman, dan nyaman di berbagai lokasi pilihan Anda.",
  keywords: [
    "thekost", 
    "sewa kost", 
    "sewa villa", 
    "sewa homestay", 
    "kost eksklusif jogja", 
    "penginapan nyaman", 
    "cari kost"
  ],
  openGraph: {
    title: "thekost - Platform Sewa Kost, Villa, dan Homestay",
    description: "thekost: Platform terpercaya untuk mencari dan menyewa kost, villa, dan homestay dengan mudah, aman, dan nyaman di berbagai lokasi pilihan Anda.",
    url: "https://thekost.id",
    siteName: "thekost",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thekost - Platform Sewa Kost, Villa, dan Homestay",
    description: "thekost: Platform terpercaya untuk mencari dan menyewa kost, villa, dan homestay dengan mudah.",
  },
  authors: [{ name: "thekost" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
