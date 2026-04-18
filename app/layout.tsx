import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mangoodakokusu.com.tr'),
  title: {
    default: "Mango Çubuklu Oda Kokusu 100ml | Bambu Çubuklu | Tropikal Ferahlık",
    template: "%s | Mango Çubuklu Oda Kokusu"
  },
  description: "Tropikal mango aroması ile evinize ferahlık katın. 100ml şişede sunulan premium kalite bambu çubuklu oda kokusu. Uzun süre kalıcı, doğal ve zararsız formül. 3 ay kesintisiz koku deneyimi.",
  keywords: [
    "mango oda kokusu",
    "çubuklu oda kokusu",
    "bambu çubuklu oda kokusu",
    "tropikal oda kokusu",
    "mango aroması",
    "ev kokusu",
    "oda parfümü",
    "100ml oda kokusu",
    "kalıcı oda kokusu",
    "doğal oda kokusu"
  ],
  authors: [{ name: "Mango Oda Kokusu" }],
  creator: "Mango Oda Kokusu",
  publisher: "Mango Oda Kokusu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mangoodakokusu.com.tr",
    siteName: "Mango Çubuklu Oda Kokusu",
    title: "Mango Çubuklu Oda Kokusu 100ml | Tropikal Ferahlık",
    description: "Tropikal mango aroması ile evinize ferahlık katın. 100ml şişede sunulan premium kalite çubuklu oda kokusu.",
    images: [
      {
        url: "/images/mango-oda-kokusu-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mango Çubuklu Oda Kokusu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@karakarhome",
    creator: "@karakarhome",
    title: "Mango Çubuklu Oda Kokusu 100ml | Tropikal Ferahlık",
    description: "Tropikal mango aroması ile evinize ferahlık katın. Premium kalite çubuklu oda kokusu.",
    images: ["/images/mango-oda-kokusu-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://mangoodakokusu.com.tr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF9933" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Pendik, İstanbul" />
        <meta name="geo.position" content="40.8767;29.2344" />
        <meta name="ICBM" content="40.8767, 29.2344" />
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
