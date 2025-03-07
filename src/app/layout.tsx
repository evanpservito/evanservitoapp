import type { Metadata } from "next";
import "./globals.css";
import { Kode_Mono, DM_Sans, Rubik } from "next/font/google";
import Navbar from "./components/Navbar";
import { Meteors } from "@/app/components/ui/meteors";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Evan Servito's Portfolio",
  description: "A portfolio curated by Evan Servito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${kodeMono.variable} ${dmSans.variable} ${rubik.variable} h-svh bg-gradient-to-b bg-linear-to-bl from-black to-purple/10 bg-fixed`}
      >
        <Navbar />
        {/* <div className="z-[-100] absolute invert">
          <Meteors number={20} />
        </div> */}

        {children}
      </body>
    </html>
  );
}
