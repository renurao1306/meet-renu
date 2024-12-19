import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});

const meriweather = Merriweather({
  subsets: ["latin"],
  weight: "400"
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
  title: "Renu's Portfolio",
  description: "Renu's small corner on the Internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${meriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
