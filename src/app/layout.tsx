import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CarWow Kenya – Buy New & Used Cars, Expert Reviews",
  description:
    "Kenya's leading car platform. Browse new and used cars, read expert reviews, compare models, and get the best deals from trusted dealers across Kenya.",
  keywords: "buy car Kenya, sell car Kenya, car reviews Kenya, Nairobi cars, Toyota Kenya, Subaru Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
