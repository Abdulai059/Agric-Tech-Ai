import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paulvante - Smart Solutions for a Stronger Agriculture",
  description:
    "Discover how cutting-edge technology, real-time insights, and precision tools are transforming traditional farming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
