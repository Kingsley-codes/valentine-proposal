import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Pinyon_Script } from "next/font/google";
import "./globals.css";
import DecorativeFooter from "@/components/introduction/DecorativeFooter";

const inter = Inter({ subsets: ["latin"] });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon-script",
});

export const metadata: Metadata = {
  title: "For Josephine ❤️",
  description: "A heartfelt Valentine's Day message",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${pinyonScript.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
        <DecorativeFooter />
      </body>
    </html>
  );
}
