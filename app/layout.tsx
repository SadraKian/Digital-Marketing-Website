import ReactQueryProvider from "@/components/shared/ReactQueryProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rasam",
  description: "Rasam digital marketing services group website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" className="overflow-x-hidden scroll-smooth">
        <head>
          <link
            rel="icon"
            type="image/x-icon"
            href="/assets/images/favicon.png"
          />
        </head>

        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
