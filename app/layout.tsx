import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000",
  description: "Build your own character. Break the limits! It's OVER 9000!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
