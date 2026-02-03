import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Pinyon_Script,
  Imperial_Script,
} from "next/font/google";
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

const imperialScript = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-imperial-script",
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
    <html
      lang="en"
      className={`${pinyonScript.variable} ${imperialScript.variable} ${plusJakartaSans.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        {children}
        <DecorativeFooter />
      </body>
    </html>
  );
}
