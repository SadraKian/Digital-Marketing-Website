import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "a website for digital marketing services",
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
