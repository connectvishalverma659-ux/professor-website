import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
          <body
           style={{
               backgroundImage: "url('/images/backgrounds/UIBackground.png')",
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundPosition: "center",
               }}
               ></body>
          {children}
        </main>

        <Footer />
         
      </body>
    </html>
  );
}