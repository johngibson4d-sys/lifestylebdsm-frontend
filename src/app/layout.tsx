import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export const metadata: Metadata = {
  title: "Lifestyle BDSM Dungeon - Premium BDSM Services",
  description: "Experience freedom and exploration at Lifestyle BDSM Dungeon. Book your perfect session with hourly rates and enjoy our premium BDSM amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;   
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-black text-white min-h-screen font-sans"
      >
        <ToastProvider />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
