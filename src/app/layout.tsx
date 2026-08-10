import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professor Academic Website",
  description: "Academic Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <html
          lang="en"
         className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
         >
      <body className="min-h-screen flex flex-col">


        {/*} <div
            className="
            fixed
            inset-0
            -z-10
            opacity-100
            bg-repeat
           "
          style={{
             backgroundImage:
              "url('/images/patterns/pattern9.png')",
              

             }}
     />*/}
      
        <Navbar />

        <main className="flex-1">
  <div
    className="min-h-full"
    style={{
      backgroundImage:
        "url('/images/backgrounds/UIBackground.png')",

      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {children}
  </div>
</main>

        <Footer />
         
      </body>
    </html>
  );
}