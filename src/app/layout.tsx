import type { Metadata } from "next";
import { Adamina, Afacad } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ClientProtection } from "@/components/ClientProtection";

const adamina = Adamina({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-adamina",
});

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "Pine & Ivory - Quality Furniture for a Lifetime",
  description: "Quality interior service - We believe great design goes beyond beauty—it elevates everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={`${adamina.variable} ${afacad.variable}`}>
        <ClientProtection />
        {children}
      </ClientBody>
    </html>
  );
}
