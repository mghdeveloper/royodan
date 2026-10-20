import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STOREX | Digital Studio",
  description: "حلول رقمية احترافية للمتاجر والمواقع والتطبيقات.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}